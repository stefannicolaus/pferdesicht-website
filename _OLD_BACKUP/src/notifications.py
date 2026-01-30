#!/usr/bin/env python3
"""
Pferdesicht - Benachrichtigungssystem
Desktop-Notifications und Email-Alerts für Batch-Prozesse.
"""

import os
import subprocess
import smtplib
from pathlib import Path
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dataclasses import dataclass
from typing import Optional


@dataclass
class SMTPConfig:
    """SMTP-Konfiguration für Email-Versand"""
    host: str
    port: int
    user: str
    password: str
    from_email: Optional[str] = None

    def __post_init__(self):
        if not self.from_email:
            self.from_email = self.user


def load_smtp_config() -> Optional[SMTPConfig]:
    """
    Lädt SMTP-Konfiguration aus .env Datei.

    Erwartete Variablen:
    - SMTP_HOST (z.B. smtp.gmail.com)
    - SMTP_PORT (z.B. 587)
    - SMTP_USER (Email-Adresse)
    - SMTP_PASS (App-Passwort)
    """
    env_path = Path(__file__).parent.parent / ".env"

    config = {
        'host': None,
        'port': 587,
        'user': None,
        'password': None
    }

    try:
        with open(env_path) as f:
            for line in f:
                line = line.strip()
                if '=' in line and not line.startswith('#'):
                    key, value = line.split('=', 1)
                    if key == 'SMTP_HOST':
                        config['host'] = value
                    elif key == 'SMTP_PORT':
                        config['port'] = int(value)
                    elif key == 'SMTP_USER':
                        config['user'] = value
                    elif key == 'SMTP_PASS':
                        config['password'] = value
    except FileNotFoundError:
        return None

    if config['host'] and config['user'] and config['password']:
        return SMTPConfig(**config)

    return None


def send_desktop_notification(
    title: str,
    message: str,
    sound: bool = True
) -> bool:
    """
    Sendet eine macOS Desktop-Notification.

    Args:
        title: Titel der Benachrichtigung
        message: Nachrichtentext
        sound: Ob ein Sound abgespielt werden soll

    Returns:
        True wenn erfolgreich, False bei Fehler
    """
    try:
        sound_cmd = 'with sound name "default"' if sound else ''
        script = f'display notification "{message}" with title "{title}" {sound_cmd}'

        subprocess.run(
            ['osascript', '-e', script],
            check=True,
            capture_output=True
        )
        return True
    except subprocess.CalledProcessError as e:
        print(f"⚠️  Desktop-Notification fehlgeschlagen: {e}")
        return False
    except FileNotFoundError:
        # osascript nicht verfügbar (nicht macOS)
        print("⚠️  Desktop-Notifications nur auf macOS verfügbar")
        return False


def send_email(
    to_email: str,
    subject: str,
    body: str,
    html_body: Optional[str] = None,
    smtp_config: Optional[SMTPConfig] = None
) -> bool:
    """
    Sendet eine Email-Benachrichtigung.

    Args:
        to_email: Empfänger-Email
        subject: Betreff
        body: Nachrichtentext (Plain-Text)
        html_body: Optional HTML-Version
        smtp_config: SMTP-Konfiguration (oder aus .env laden)

    Returns:
        True wenn erfolgreich, False bei Fehler
    """
    if smtp_config is None:
        smtp_config = load_smtp_config()

    if smtp_config is None:
        print("⚠️  Email nicht gesendet: SMTP nicht konfiguriert")
        print("    Füge SMTP_HOST, SMTP_USER, SMTP_PASS zur .env hinzu")
        return False

    try:
        # Email erstellen
        msg = MIMEMultipart('alternative')
        msg['From'] = smtp_config.from_email
        msg['To'] = to_email
        msg['Subject'] = subject

        # Plain-Text Teil
        msg.attach(MIMEText(body, 'plain', 'utf-8'))

        # HTML Teil (optional)
        if html_body:
            msg.attach(MIMEText(html_body, 'html', 'utf-8'))

        # Senden
        with smtplib.SMTP(smtp_config.host, smtp_config.port) as server:
            server.starttls()
            server.login(smtp_config.user, smtp_config.password)
            server.send_message(msg)

        print(f"📧 Email gesendet an {to_email}")
        return True

    except smtplib.SMTPAuthenticationError:
        print("❌ Email-Fehler: Authentifizierung fehlgeschlagen")
        print("   Prüfe SMTP_USER und SMTP_PASS in .env")
        return False
    except smtplib.SMTPException as e:
        print(f"❌ Email-Fehler: {e}")
        return False
    except Exception as e:
        print(f"❌ Unerwarteter Email-Fehler: {e}")
        return False


def send_batch_complete_notification(
    total: int,
    ok_count: int,
    retry_count: int,
    failed_count: int,
    duration_minutes: float
) -> None:
    """
    Sendet Desktop-Notification bei Batch-Ende.
    """
    success_rate = ((ok_count + retry_count) / total * 100) if total > 0 else 0

    if failed_count == 0:
        title = "✅ Batch erfolgreich!"
        message = f"{total} Bilder generiert in {duration_minutes:.1f} Min"
    elif failed_count <= total * 0.1:
        title = "⚠️ Batch abgeschlossen"
        message = f"{ok_count + retry_count}/{total} OK, {failed_count} fehlgeschlagen"
    else:
        title = "❌ Batch mit Fehlern"
        message = f"Nur {success_rate:.0f}% erfolgreich. Prüfung erforderlich!"

    send_desktop_notification(title, message)


def send_batch_error_email(
    to_email: str,
    total: int,
    ok_count: int,
    retry_count: int,
    failed_count: int,
    failed_jobs: list[dict],
    report_path: str
) -> None:
    """
    Sendet Email-Alert bei hoher Fehlerrate.

    Args:
        to_email: Empfänger
        total: Gesamtzahl Jobs
        ok_count: Erfolgreiche Jobs (1. Versuch)
        retry_count: Erfolgreiche Jobs (nach Retry)
        failed_count: Fehlgeschlagene Jobs
        failed_jobs: Liste mit Details zu fehlgeschlagenen Jobs
        report_path: Pfad zum HTML-Report
    """
    error_rate = (failed_count / total * 100) if total > 0 else 0

    subject = f"⚠️ Pferdesicht Batch: {failed_count} Fehler ({error_rate:.0f}%)"

    # Plain-Text Body
    failed_list = "\n".join([
        f"  - {job.get('job_id', 'N/A')}: {job.get('filename', 'N/A')}"
        for job in failed_jobs
    ])

    body = f"""Pferdesicht Batch-Generierung abgeschlossen mit Fehlern.

📊 Statistik:
  ✅ OK (1. Versuch): {ok_count}
  ⚠️ OK (nach Retry): {retry_count}
  ❌ Fehlgeschlagen:  {failed_count}
  📈 Fehlerrate:      {error_rate:.1f}%

❌ Fehlgeschlagene Jobs:
{failed_list}

📄 HTML-Report: {report_path}

Bitte prüfe die fehlgeschlagenen Bilder im Review-Interface.

---
Pferdesicht Bulk Image Generator
"""

    # HTML Body
    html_body = f"""
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{ font-family: -apple-system, sans-serif; padding: 20px; background: #f5f5f5; }}
        .container {{ max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; }}
        h1 {{ color: #2c2a25; }}
        .stats {{ display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }}
        .stat {{ padding: 15px; border-radius: 8px; text-align: center; }}
        .stat.ok {{ background: #e8f5e9; }}
        .stat.retry {{ background: #fff8e1; }}
        .stat.failed {{ background: #ffebee; }}
        .stat-value {{ font-size: 2em; font-weight: bold; }}
        .failed-list {{ background: #f5f5f5; padding: 15px; border-radius: 8px; }}
        .failed-item {{ padding: 8px 0; border-bottom: 1px solid #ddd; }}
        .btn {{ display: inline-block; padding: 12px 24px; background: #78866b; color: white;
               text-decoration: none; border-radius: 8px; margin-top: 20px; }}
    </style>
</head>
<body>
    <div class="container">
        <h1>⚠️ Batch-Generierung mit Fehlern</h1>

        <div class="stats">
            <div class="stat ok">
                <div class="stat-value">{ok_count}</div>
                <div>✅ OK</div>
            </div>
            <div class="stat retry">
                <div class="stat-value">{retry_count}</div>
                <div>⚠️ Nach Retry</div>
            </div>
            <div class="stat failed">
                <div class="stat-value">{failed_count}</div>
                <div>❌ Fehlgeschlagen</div>
            </div>
            <div class="stat">
                <div class="stat-value">{error_rate:.0f}%</div>
                <div>Fehlerrate</div>
            </div>
        </div>

        <h3>Fehlgeschlagene Jobs:</h3>
        <div class="failed-list">
            {"".join(f'<div class="failed-item">❌ {job.get("job_id", "N/A")}: {job.get("filename", "N/A")}</div>' for job in failed_jobs)}
        </div>

        <p>Bitte prüfe die fehlgeschlagenen Bilder im Review-Interface.</p>

        <a href="file://{report_path}" class="btn">📄 Review-Report öffnen</a>
    </div>
</body>
</html>
"""

    send_email(to_email, subject, body, html_body)


# ============================================================
# Test
# ============================================================

if __name__ == "__main__":
    print("🔔 Teste Benachrichtigungssystem...\n")

    # Desktop-Notification testen
    print("1. Desktop-Notification...")
    if send_desktop_notification("Pferdesicht Test", "Notification funktioniert! 🐴"):
        print("   ✅ Desktop-Notification gesendet\n")

    # SMTP-Konfiguration prüfen
    print("2. SMTP-Konfiguration...")
    smtp_config = load_smtp_config()
    if smtp_config:
        print(f"   ✅ SMTP konfiguriert: {smtp_config.host}")
        print(f"   📧 User: {smtp_config.user}\n")
    else:
        print("   ⚠️ SMTP nicht konfiguriert")
        print("   Füge folgende Variablen zur .env hinzu:")
        print("   SMTP_HOST=smtp.gmail.com")
        print("   SMTP_PORT=587")
        print("   SMTP_USER=deine@email.com")
        print("   SMTP_PASS=dein-app-passwort\n")

    # Batch-Notification simulieren
    print("3. Batch-Complete Notification...")
    send_batch_complete_notification(
        total=10,
        ok_count=7,
        retry_count=2,
        failed_count=1,
        duration_minutes=5.5
    )
    print("   ✅ Batch-Notification gesendet\n")

    print("✅ Test abgeschlossen!")

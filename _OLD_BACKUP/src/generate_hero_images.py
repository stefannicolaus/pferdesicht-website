#!/usr/bin/env python3
"""
Pferdesicht - Hero Images Generator
Generiert Hero-Bilder mit der Imagen API
"""

import os
import sys
import time
from pathlib import Path
from datetime import datetime
import base64
from typing import Optional

from google import genai
from google.genai import types

# Konfiguration
OUTPUT_DIR = Path("pferdesicht/assets/images/generated")
DELAY_BETWEEN_REQUESTS = 10  # Sekunden zwischen API-Aufrufen


def initialize_client():
    """Initialisiere Google Genai Client"""
    # Versuche verschiedene Authentifizierungsmethoden
    api_key = os.getenv("GOOGLE_API_KEY")
    
    if not api_key:
        # Versuche Standard-Authentifizierung
        try:
            # Prüfe auf Google Cloud Authentifizierung
            client = genai.Client()
            print("✅ Google Cloud Authentifizierung verwendet")
            return client
        except Exception as e:
            raise ValueError(
                f"Keine gültige Authentifizierung gefunden.\n"
                f"Bitte setzen Sie die GOOGLE_API_KEY environment variable oder konfigurieren Sie Google Cloud.\n"
                f"Fehler: {e}"
            )
    
    return genai.Client(api_key=api_key)


def generate_image(client, prompt: str, width: int, height: int, output_path: Path) -> bool:
    """
    Generiere ein Bild mit Imagen 3 API
    
    Args:
        client: Google Genai Client
        prompt: Text-Prompt für Bildgenerierung
        width: Bildbreite in Pixeln
        height: Bildhöhe in Pixeln
        output_path: Pfad zum Speichern des Bildes
        
    Returns:
        True wenn erfolgreich, False wenn fehlgeschlagen
    """
    try:
        print(f"\n📷 Generiere Bild: {output_path.name}")
        print(f"   Größe: {width}x{height}px")
        print(f"   Prompt: {prompt[:100]}...")
        
        # Generiere Bild mit Imagen 3
        response = client.models.generate_images(
            model="imagen-3.0-generate-002",
            prompt=prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                output_file_prefix=str(output_path.parent / output_path.stem),
                # Imagen verwendet Standardauflösungen, aber wir versuchen die gewünschten zu setzen
            ),
        )
        
        # Speichern des generierten Bildes
        if response and response.generated_images and len(response.generated_images) > 0:
            generated_image = response.generated_images[0]
            
            # Speichere das Bild
            if hasattr(generated_image, "image") and generated_image.image:
                output_path.parent.mkdir(parents=True, exist_ok=True)
                
                # Schreibe Bilddaten
                with open(output_path, "wb") as f:
                    f.write(generated_image.image)
                
                file_size = output_path.stat().st_size
                file_size_mb = file_size / (1024 * 1024)
                
                print(f"   ✅ Erfolgreich generiert")
                print(f"   Dateigröße: {file_size_mb:.2f} MB ({file_size:,} bytes)")
                return True
            else:
                print(f"   ❌ Fehler: Generiertes Bild hat keine Daten")
                return False
        else:
            print(f"   ❌ Fehler: Keine Bilder in Response")
            return False
            
    except Exception as e:
        print(f"   ❌ Fehler bei Bildgenerierung: {str(e)}")
        return False


def main():
    """Hauptfunktion"""
    
    # Initialisiere Client
    try:
        client = initialize_client()
        print("✅ Google Genai Client initialisiert")
    except Exception as e:
        print(f"❌ Fehler beim Initialisieren des Clients: {e}")
        sys.exit(1)
    
    # Definiere die zu generierenden Bilder
    hero_images = [
        {
            "name": "hero-pferd-winter-schnee.png",
            "width": 1600,
            "height": 900,
            "folder": "heroes",
            "prompt": """A black horse standing in a snowy winter paddock during early morning blue hour. Light fog creating depth and atmosphere. The horse's breath visible as steam. Frost crystals on its thick winter coat catching the first light. Cool blue and white tones with hints of pale pink from approaching sunrise. The horse looks stoic and powerful. Wooden fence posts visible. Cinematic wide shot, sharp focus on horse, misty background. Professional photography, no people, no blanket."""
        },
        {
            "name": "quiz-hero-collage-desktop.png",
            "width": 1200,
            "height": 800,
            "folder": "heroes",
            "prompt": """A horse walking through a fresh spring meadow, mid-morning soft overcast light. Vibrant green grass with scattered wildflowers. The horse is mid-stride, relaxed but alert, ears forward. Natural daylight, no harsh shadows. Fresh, optimistic atmosphere. Mix of sharp foreground grass and softly blurred treeline in distance. Sage green and natural earth tones. Professional equine photography. No people. Composition leaves space on right for text overlay."""
        },
        {
            "name": "quiz-hero-collage-mobile.png",
            "width": 800,
            "height": 600,
            "folder": "heroes",
            "prompt": """Portrait of a horse's head and neck in a spring setting. The horse looks directly toward camera with gentle, curious expression. Soft diffused daylight, slightly overcast. Fresh green background out of focus. Natural colors, no filter look. The image feels personal and inviting. Professional portrait photography. Centered composition for mobile. No tack."""
        }
    ]
    
    # Erstelle Ordnerstruktur
    for image in hero_images:
        folder = OUTPUT_DIR / image["folder"]
        folder.mkdir(parents=True, exist_ok=True)
    
    print(f"\n📁 Ordnerstruktur erstellt in: {OUTPUT_DIR}")
    
    # Generiere Bilder
    results = []
    total_images = len(hero_images)
    
    print(f"\n🎨 Starte Bildgenerierung ({total_images} Bilder)...\n")
    
    for idx, image_config in enumerate(hero_images, 1):
        output_path = OUTPUT_DIR / image_config["folder"] / image_config["name"]
        
        print(f"[{idx}/{total_images}]", end=" ")
        
        success = generate_image(
            client,
            image_config["prompt"],
            image_config["width"],
            image_config["height"],
            output_path
        )
        
        results.append({
            "name": image_config["name"],
            "path": output_path,
            "success": success
        })
        
        # Warte zwischen Requests
        if idx < total_images:
            print(f"   ⏳ Warte {DELAY_BETWEEN_REQUESTS}s vor nächstem Request...")
            time.sleep(DELAY_BETWEEN_REQUESTS)
    
    # Zusammenfassung
    print("\n" + "="*70)
    print("GENERIERUNGSERGEBNIS")
    print("="*70)
    
    successful = sum(1 for r in results if r["success"])
    failed = sum(1 for r in results if not r["success"])
    
    print(f"\n✅ Erfolgreich: {successful}/{total_images}")
    print(f"❌ Fehlgeschlagen: {failed}/{total_images}")
    
    print(f"\n📁 Generierte Bilder in: {OUTPUT_DIR}")
    
    # Liste erfolgreich generierte Bilder
    if successful > 0:
        print("\n✅ Erfolgreich generierte Bilder:")
        for result in results:
            if result["success"] and result["path"].exists():
                file_size = result["path"].stat().st_size
                file_size_mb = file_size / (1024 * 1024)
                print(f"   • {result['name']} ({file_size_mb:.2f} MB)")
    
    # Liste fehlgeschlagene Bilder
    if failed > 0:
        print("\n❌ Fehlgeschlagene Bilder:")
        for result in results:
            if not result["success"]:
                print(f"   • {result['name']}")
    
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())

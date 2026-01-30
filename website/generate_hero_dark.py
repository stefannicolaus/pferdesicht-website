#!/usr/bin/env python3
"""
Generiert dunkle Homepage Hero-Bilder (Desktop + Mobile) mit Imagen 4 API
"""

import os
from pathlib import Path
from dotenv import load_dotenv
from google import genai
from google.genai import types

# .env aus Parent-Verzeichnis laden
load_dotenv(Path(__file__).parent.parent / ".env")

# API Client initialisieren
client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))


def generate_image(prompt: str, aspect_ratio: str, output_path: Path) -> bool:
    """Generiert ein einzelnes Bild mit Imagen 4"""
    print(f"\n📷 Generiere: {output_path.name}")
    print(f"   Aspect Ratio: {aspect_ratio}")
    print(f"   Prompt: {prompt[:100]}...")

    try:
        response = client.models.generate_images(
            model="imagen-4.0-generate-001",
            prompt=prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                aspect_ratio=aspect_ratio,
            ),
        )

        if response.generated_images:
            image_data = response.generated_images[0].image.image_bytes
            output_path.parent.mkdir(parents=True, exist_ok=True)

            with open(output_path, "wb") as f:
                f.write(image_data)

            file_size_kb = output_path.stat().st_size / 1024
            print(f"   ✅ Gespeichert: {output_path}")
            print(f"   💾 Größe: {file_size_kb:.1f} KB")
            return True
        else:
            print("   ❌ Keine Bildantwort von Imagen erhalten")
            return False

    except Exception as e:
        print(f"   ❌ Fehler: {e}")
        import traceback
        traceback.print_exc()
        return False


def main():
    print("\n" + "=" * 60)
    print("🐴 PFERDESICHT - Dunkle Homepage Hero-Bilder")
    print("=" * 60)

    output_dir = Path(__file__).parent / "public" / "images" / "heroes"

    # Desktop Hero Dark (16:9)
    desktop_prompt = """Dark moody photograph of a horse silhouette in a German stable at dusk.
Horse positioned on the LEFT side of frame, facing right.
Very dark exposure, almost abstract.
Warm earth tones: deep brown #2c2a25, hints of sage green #78866b, muted gold #c8a476.
Soft bokeh, dreamy atmosphere.
The RIGHT 40% of the image should be nearly solid dark for UI overlay.
NO bright areas.
Editorial style, NOT stock photo.
Cinematic, contemplative mood.
Film grain texture."""

    # Mobile Hero Dark (9:16)
    mobile_prompt = """Dark moody photograph of a horse silhouette, portrait orientation, dusk lighting.
Horse in LOWER LEFT corner, subtle and abstract.
Very dark exposure overall.
UPPER 60% should be nearly solid dark brown #2c2a25 for text overlay.
Warm earth tones with hints of sage green and muted gold.
Soft focus, dreamy, cinematic.
NOT a clear horse photo - more like a shadow or silhouette.
Film grain texture.
Editorial style."""

    # Bilder generieren
    results = []

    results.append(
        generate_image(
            prompt=desktop_prompt,
            aspect_ratio="16:9",
            output_path=output_dir / "hero-desktop-dark.png",
        )
    )

    results.append(
        generate_image(
            prompt=mobile_prompt,
            aspect_ratio="9:16",
            output_path=output_dir / "hero-mobile-dark.png",
        )
    )

    # Zusammenfassung
    print("\n" + "=" * 60)
    print("📊 ZUSAMMENFASSUNG")
    print("=" * 60)
    success_count = sum(results)
    print(f"   Erfolgreich: {success_count}/{len(results)}")

    if success_count == len(results):
        print("\n✅ Alle dunklen Hero-Bilder wurden generiert!")
    else:
        print("\n⚠️  Nicht alle Bilder wurden generiert.")


if __name__ == "__main__":
    main()

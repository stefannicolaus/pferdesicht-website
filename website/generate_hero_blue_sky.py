#!/usr/bin/env python3
"""
Generiert Hero-Bild mit blauem Himmel und hohem Gras
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
    print("🐴 PFERDESICHT - Hero mit blauem Himmel")
    print("=" * 60)

    output_dir = Path(__file__).parent / "public" / "images" / "heroes"

    prompt = """Wide landscape photograph of a German open stable (Offenstall) at midday with clear blue sky.

COMPOSITION:
- TOP: Clear blue sky with soft white clouds - darker blue in upper left corner for text
- BOTTOM: 2-3 horses grazing on TALL LUSH summer pasture
- Wooden fence in background
- ALL horses FULLY visible - NO cropping on edges
- Horses positioned CENTER, not touching left or right edge

LIGHTING:
- Bright midday sun
- Natural daylight, no golden hour
- Clear, crisp lighting
- Soft shadows

CRITICAL - GRASS:
- TALL healthy summer grass (20-30cm / knee-high)
- Lush green meadow
- NOT overgrazed, NOT short

CRITICAL - HORSES:
- 2-3 horses COMPLETE in frame
- Safe distance from all edges
- No body parts cut off

CRITICAL - SKY:
- Natural blue sky (NOT orange, NOT dramatic)
- Darker/deeper blue in upper LEFT for text readability
- Can have soft white clouds on right side
- Think: pleasant summer day, not dramatic sunset

MOOD:
- Fresh, natural, authentic
- Pleasant summer day
- Peaceful grazing

STYLE: Editorial landscape photography, natural colors, German countryside
ASPECT RATIO: 16:9 landscape
RESOLUTION: 1920x1080"""

    success = generate_image(
        prompt=prompt,
        aspect_ratio="16:9",
        output_path=output_dir / "hero-herde-blue-sky.png",
    )

    print("\n" + "=" * 60)
    if success:
        print("✅ Hero-Bild mit blauem Himmel wurde generiert!")
    else:
        print("❌ Fehler bei der Bildgenerierung")
    print("=" * 60)


if __name__ == "__main__":
    main()

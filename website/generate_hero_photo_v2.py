#!/usr/bin/env python3
"""
Generiert Hero-Bild - Pferde LINKS, längeres Gras
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
    print("🐴 PFERDESICHT - Hero v2: Pferde LINKS, längeres Gras")
    print("=" * 60)

    output_dir = Path(__file__).parent / "public" / "images" / "heroes"

    prompt = """Award-winning nature photography of horses grazing in a German meadow, midday summer.

COMPOSITION - CRITICAL:
- 2-3 horses positioned on the LEFT SIDE of the frame
- RIGHT 40% of image should be EMPTY (just grass and sky, NO horses)
- Horses must NOT extend into the right third of the image
- This leaves space for a UI overlay on the right side

PHOTOGRAPHY:
- Shot on Canon EOS 5D Mark IV with 70-200mm f/2.8 lens
- Natural depth of field
- Real film grain and texture
- Must look like a REAL photograph, not AI generated

SKY:
- Clear blue summer sky
- Natural white clouds scattered
- Deeper blue in upper left corner
- Authentic midday lighting

GRASS - VERY IMPORTANT:
- VERY TALL summer meadow grass (40-50cm / knee to thigh height)
- Lush, wild, ungrazed pasture
- Mixed tall grasses, some wildflowers
- Grass almost reaching horses' bellies
- Wild meadow look, NOT manicured
- Visible grass seed heads swaying

HORSES:
- 2-3 bay/chestnut horses
- Positioned on LEFT side only
- Grazing peacefully in tall grass
- Realistic proportions and anatomy
- Natural coat shine

EMPTY RIGHT SIDE:
- Right 40% should show only: tall grass in foreground, meadow, sky
- NO horses on the right side
- This area will have a transparent UI box overlaid

Wooden fence visible in background.
German countryside setting.

ASPECT RATIO: 16:9
RESOLUTION: 1920x1080"""

    success = generate_image(
        prompt=prompt,
        aspect_ratio="16:9",
        output_path=output_dir / "hero-herde-photo-v2.png",
    )

    print("\n" + "=" * 60)
    if success:
        print("✅ Hero v2 wurde generiert!")
    else:
        print("❌ Fehler bei der Bildgenerierung")
    print("=" * 60)


if __name__ == "__main__":
    main()

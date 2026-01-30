#!/usr/bin/env python3
"""
Generiert Hero-Bild mit realistischen Pferden
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
    print("🐴 PFERDESICHT - Hero mit realistischen Pferden")
    print("=" * 60)

    output_dir = Path(__file__).parent / "public" / "images" / "heroes"

    prompt = """Professional editorial photograph of horses grazing in a German pasture at midday.

PHOTOGRAPHY STYLE:
- REALISTIC documentary photography - NOT illustration, NOT painting, NOT CGI
- Shot with professional DSLR camera (Canon 5D or similar)
- Natural, authentic look like a real farm photo
- NO artificial or stylized look

COMPOSITION:
- 2-3 horses ONLY (NOT 4, NOT more)
- Horses positioned in CENTER of frame
- ALL horses FULLY visible - no cropping at edges
- Safe distance from left and right edge
- Wooden fence in background

SKY:
- Clear blue sky with subtle white clouds
- Darker/deeper blue in upper left for text
- Natural midday sky - SAME as previous blue sky image

GRASS:
- Tall lush summer grass (knee-high, 20-30cm)
- Rich green color
- NOT overgrazed

HORSES:
- Real, natural looking horses
- Bay or chestnut colors
- Grazing peacefully
- PHOTOREALISTIC - must look like a real photograph
- Natural proportions, natural poses

CRITICAL:
- Must look like a REAL PHOTOGRAPH taken at a German stable
- NO CGI, NO illustration, NO painting style
- NO comic look, NO artificial rendering
- NO more than 3 horses

ASPECT RATIO: 16:9 landscape
RESOLUTION: 1920x1080"""

    success = generate_image(
        prompt=prompt,
        aspect_ratio="16:9",
        output_path=output_dir / "hero-herde-realistic.png",
    )

    print("\n" + "=" * 60)
    if success:
        print("✅ Hero-Bild mit realistischen Pferden wurde generiert!")
    else:
        print("❌ Fehler bei der Bildgenerierung")
    print("=" * 60)


if __name__ == "__main__":
    main()

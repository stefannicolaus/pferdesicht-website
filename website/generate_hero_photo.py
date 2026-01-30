#!/usr/bin/env python3
"""
Generiert Hero-Bild das wie ein echtes Foto aussieht
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
    print("🐴 PFERDESICHT - Fotorealistisches Hero-Bild")
    print("=" * 60)

    output_dir = Path(__file__).parent / "public" / "images" / "heroes"

    prompt = """Award-winning nature photography of horses grazing in a German meadow, midday summer.

PHOTOGRAPHY REQUIREMENTS:
- Shot on Canon EOS 5D Mark IV with 70-200mm f/2.8 lens
- Natural depth of field
- Real film grain and texture
- NO AI artifacts, NO plastic look, NO CGI
- Must be INDISTINGUISHABLE from a real photograph

COMPOSITION:
- EXACTLY 3 horses (not 4, not 2)
- Horses in CENTER of frame with space on all sides
- ALL horses completely visible - no cropping
- Wooden pasture fence in middle distance
- German countryside background

SKY:
- Clear blue summer sky
- Natural white clouds
- Deeper blue in upper left (for text overlay)
- Authentic midday lighting

GRASS - CRITICAL:
- TALL summer meadow grass (25-35cm height)
- Lush, healthy, ungrazed pasture
- Mixed grasses and wildflowers
- Grass reaching horse's knees
- NOT short, NOT overgrazed, NOT manicured lawn

HORSES:
- 3 bay/chestnut horses
- Natural poses - grazing peacefully
- Realistic proportions and anatomy
- Natural coat shine from sunlight
- NO stylized or illustrated look

REALISM CHECKLIST:
- Natural lighting with soft shadows
- Realistic grass texture and variety
- Authentic horse anatomy
- No artificial smoothness
- No oversaturation
- Looks like National Geographic photo

ASPECT RATIO: 16:9
RESOLUTION: 1920x1080"""

    success = generate_image(
        prompt=prompt,
        aspect_ratio="16:9",
        output_path=output_dir / "hero-herde-photo.png",
    )

    print("\n" + "=" * 60)
    if success:
        print("✅ Fotorealistisches Hero-Bild wurde generiert!")
    else:
        print("❌ Fehler bei der Bildgenerierung")
    print("=" * 60)


if __name__ == "__main__":
    main()

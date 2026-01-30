#!/usr/bin/env python3
"""
Generiert Hero-Bild - Offenstall Setting, natürliche Atmosphäre
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
    print("🐴 PFERDESICHT - Hero Natural: Offenstall Setting")
    print("=" * 60)

    output_dir = Path(__file__).parent / "public" / "images" / "heroes"

    prompt = """Documentary photograph by a professional equine photographer, published in Horse & Hound magazine.

SCENE:
- German Offenstall (open stable / paddock paradise) setting
- 3 horses in a German summer pasture
- NATURAL grouping - NOT in a row, NOT evenly spaced
- One horse slightly forward, two behind at different distances
- Like a real candid moment, not posed
- Authentic Offenstall atmosphere with open space and natural environment

HORSE POSITIONING - CRITICAL:
- All 3 horses positioned in LEFT 60% of the image
- RIGHT 40% of image should be mostly sky/background (UI overlay area)
- NO horses in the right portion of the image
- Horses must not be covered by any UI elements

HORSES:
- 3 horses total (bay and chestnut colors)
- Natural relaxed poses - some grazing, one maybe looking up
- Realistic anatomy and proportions
- Natural coat texture with sunlight highlights
- Heads clearly visible above grass line

GRASS - IMPORTANT:
- Tall healthy summer meadow (20-25cm)
- Grass reaches mid-leg on horses, NOT covering heads
- Mixed meadow grasses with some wildflowers
- Lush green, well-maintained but not manicured
- Natural texture and variation

SKY:
- Clear blue summer sky
- Soft white clouds on right side
- Deeper blue in upper left corner for text readability
- Natural midday lighting
- Sky extends across FULL WIDTH of image

BACKGROUND:
- Wooden pasture fence typical for Offenstall
- German countryside, trees on horizon
- Maybe hint of shelter/run-in shed in far distance
- Soft natural bokeh in far background
- Background continues across full image width

PHOTOGRAPHY STYLE:
- Shot on full-frame DSLR, 85mm or 135mm lens
- f/4 aperture for natural depth of field
- Must look like real editorial horse photography
- NO AI look, NO CGI, NO illustration
- Indistinguishable from Getty Images stock photo

COMPOSITION - CRITICAL:
- Wide 16:9 landscape format for FULL-WIDTH hero background
- Image fills entire hero section edge to edge
- Horses in LEFT 60% only
- RIGHT 40% = sky, fence, grass (no horses) for Lead Magnet Box overlay
- All horses fully visible with margin from edges

ASPECT RATIO: 16:9
RESOLUTION: 1920x1080"""

    success = generate_image(
        prompt=prompt,
        aspect_ratio="16:9",
        output_path=output_dir / "hero-herde-natural.png",
    )

    print("\n" + "=" * 60)
    if success:
        print("✅ Hero Natural wurde generiert!")
    else:
        print("❌ Fehler bei der Bildgenerierung")
    print("=" * 60)


if __name__ == "__main__":
    main()

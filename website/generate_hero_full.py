#!/usr/bin/env python3
"""
Generiert Hero-Bilder fuer ueberarbeitete Hero Section
- Desktop: hero-herde-full.png (16:10, Pferde links/mitte, rechts leer fuer Card)
- Mobile: hero-herde-mobile.png (9:16, Pferde unten, oben Platz fuer Text)
"""

import warnings
warnings.filterwarnings("ignore", category=FutureWarning)
warnings.filterwarnings("ignore", message=".*urllib3.*")

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
    print("🐴 PFERDESICHT - Hero-Bilder (Desktop + Mobile)")
    print("=" * 60)

    output_dir = Path(__file__).parent / "public" / "images" / "heroes"

    # Desktop Bild (16:10 - 2560x1600)
    desktop_prompt = """Panoramic wide shot of German horse pasture (Koppel) at golden hour.
3-4 horses distributed in the LEFT HALF and CENTER of the image.
NO horses on the RIGHT SIDE of the image - that area should be empty pasture with grass.
Horses grazing peacefully in the lower portion of frame.
Wide open pasture with green grass, wooden fence posts, soft trees in background.
Beautiful golden sky in upper portion with soft clouds.
Warm evening light casting long shadows.
Authentic German Offenstall atmosphere.
The RIGHT THIRD of the image should be mostly empty pasture and grass - space for UI overlay.
Documentary photography style, natural lighting, NOT stock photo, NOT AI looking.
Cinematic composition, peaceful, contemplative mood."""

    # Mobile Bild (9:16 - 1080x1920)
    mobile_prompt = """Portrait shot of German horse pasture at golden hour.
2-3 horses in the LOWER THIRD of the image only, grazing on green pasture.
UPPER TWO-THIRDS shows open golden sky and soft pasture background - empty space for text overlay.
Horses should NOT be in the center of the frame - they are at the bottom.
Wide open feeling with lots of sky.
Warm golden evening light, authentic Offenstall atmosphere.
Green grass, wooden fence posts visible, trees in soft background.
Documentary photography style, natural lighting.
NOT stock photo, NOT AI looking.
Peaceful, serene, contemplative mood."""

    results = []

    # Desktop generieren (16:9 - closest to 16:10)
    results.append(generate_image(
        prompt=desktop_prompt,
        aspect_ratio="16:9",
        output_path=output_dir / "hero-herde-full.png",
    ))

    # Mobile generieren
    results.append(generate_image(
        prompt=mobile_prompt,
        aspect_ratio="9:16",
        output_path=output_dir / "hero-herde-mobile.png",
    ))

    print("\n" + "=" * 60)
    if all(results):
        print("✅ Alle Hero-Bilder wurden generiert!")
        print("\nDateien:")
        print("  - public/images/heroes/hero-herde-full.png (Desktop 16:10)")
        print("  - public/images/heroes/hero-herde-mobile.png (Mobile 9:16)")
    else:
        print("⚠️  Einige Bilder konnten nicht generiert werden")


if __name__ == "__main__":
    main()

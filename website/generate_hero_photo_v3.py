#!/usr/bin/env python3
"""
Generiert Hero-Bild v3 - Natürlichere Pferde-Positionen, kürzeres Gras
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
    print("🐴 PFERDESICHT - Hero v3: Natürliche Positionen, besseres Gras")
    print("=" * 60)

    output_dir = Path(__file__).parent / "public" / "images" / "heroes"

    prompt = """Award-winning nature photography of horses in a German summer meadow.

COMPOSITION:
- 2-3 horses on the LEFT SIDE of frame
- RIGHT 40% of image empty (just grass and sky for UI overlay)
- Horses at DIFFERENT DISTANCES from camera - NOT in a row
- One horse closer, others further back - natural scattered arrangement
- NOT lined up, NOT parallel, NOT artificial formation

HORSE POSITIONS - CRITICAL:
- Horses should look NATURALLY scattered across the pasture
- Different angles - some facing camera, some sideways, some grazing
- Varying distances creating depth
- Like a real candid farm photo, NOT posed

SKY:
- Clear blue summer sky
- Some white clouds
- Deeper blue in upper left
- Midday natural lighting

GRASS - ADJUSTED:
- Healthy summer pasture grass (20-30cm / ankle to knee height)
- NOT too tall - horses' heads and necks fully visible
- Lush green but not overgrown
- Natural meadow, some variation in height
- Horses' legs visible to mid-cannon bone

HORSES:
- 2-3 bay or chestnut horses
- All heads clearly visible above grass
- Natural relaxed poses
- Grazing or standing peacefully
- Realistic anatomy and proportions

REALISM:
- Must look like authentic farm photography
- Natural lighting and shadows
- No artificial or posed look
- Candid moment captured

Wooden fence in background. German countryside.

ASPECT RATIO: 16:9
RESOLUTION: 1920x1080"""

    success = generate_image(
        prompt=prompt,
        aspect_ratio="16:9",
        output_path=output_dir / "hero-herde-photo-v3.png",
    )

    print("\n" + "=" * 60)
    if success:
        print("✅ Hero v3 wurde generiert!")
    else:
        print("❌ Fehler bei der Bildgenerierung")
    print("=" * 60)


if __name__ == "__main__":
    main()

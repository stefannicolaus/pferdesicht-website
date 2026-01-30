#!/usr/bin/env python3
"""
Generiert breites Homepage Hero-Bild mit Imagen 4 API
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
    print("🐴 PFERDESICHT - Breites Hero-Bild (Koppel-Szene)")
    print("=" * 60)

    output_dir = Path(__file__).parent / "public" / "images" / "heroes"

    # Desktop Hero - Wide pasture scene (16:9)
    desktop_prompt = """Wide landscape photograph of a horse grazing on a German pasture (Koppel) at golden hour.
Horse positioned in the LEFT QUARTER of frame, full body visible, facing right.
IMPORTANT: Large open meadow with grass visible, wooden fence posts in background, typical German Offenstall atmosphere.
Warm evening light, soft bokeh in background.
The horse is NOT the main focus - the peaceful pasture scene is.
Documentary style photography, authentic, NOT stock photo, NOT AI looking.
Sage green grass, golden sunlight, warm earth tones.
Wide-angle lens showing expansive pasture.
Serene, peaceful, contemplative mood."""

    result = generate_image(
        prompt=desktop_prompt,
        aspect_ratio="16:9",
        output_path=output_dir / "hero-desktop.png",
    )

    print("\n" + "=" * 60)
    if result:
        print("✅ Hero-Bild wurde generiert!")
    else:
        print("❌ Fehler bei der Bildgenerierung")


if __name__ == "__main__":
    main()

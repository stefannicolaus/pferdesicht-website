#!/usr/bin/env python3
"""
Generiert Hero-Bild mit Pferdeherde mit Imagen 4 API
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
    print("🐴 PFERDESICHT - Hero-Bild mit Pferdeherde")
    print("=" * 60)

    output_dir = Path(__file__).parent / "public" / "images" / "heroes"

    prompt = """Panoramic wide shot of German horse pasture (Koppel) at golden hour.
3-4 horses grazing together as a small herd, positioned across the frame.
Zoom slightly closer so horses are clearly visible but still showing full pasture landscape.
Wooden fence posts, trees in background.
Warm golden evening light, sage green grass.
Authentic German Offenstall with multiple horses.
Peaceful herd atmosphere, horses relaxed and grazing.
Documentary photography style, NOT stock photo.
Natural, serene, contemplative mood."""

    result = generate_image(
        prompt=prompt,
        aspect_ratio="16:9",
        output_path=output_dir / "hero-herde.png",
    )

    print("\n" + "=" * 60)
    if result:
        print("✅ Hero-Bild mit Herde wurde generiert!")
    else:
        print("❌ Fehler bei der Bildgenerierung")


if __name__ == "__main__":
    main()

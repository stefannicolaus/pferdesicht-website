#!/usr/bin/env python3
"""
Generiert natürliche Homepage Hero-Bilder (Desktop + Mobile) mit Imagen 4 API
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
    print("🐴 PFERDESICHT - Natürliche Homepage Hero-Bilder")
    print("=" * 60)

    output_dir = Path(__file__).parent / "public" / "images" / "heroes"

    # Desktop Hero Natural (16:9)
    desktop_prompt = """Natural editorial photograph of a horse on a German pasture at golden hour sunset.
Horse positioned on the LEFT third of frame, facing right, naturally lit by warm evening sun.
Open paddock with grass and wooden fence posts.
Warm, inviting atmosphere.
Colors: natural sage green grass, warm golden sunlight on horse coat, soft brown earth tones.
Soft bokeh background.
The RIGHT side gradually becomes softer/less detailed for UI overlay.
Authentic documentary style photography, real horse on real German Koppel.
NO AI aesthetic, NO perfect lighting, NO stock photo look.
Like a photo taken by a friend at the stable."""

    # Mobile Hero Natural (9:16)
    mobile_prompt = """Natural editorial photograph of a horse on a German pasture at golden hour, portrait orientation.
Horse in LOWER portion of frame, warmly lit by sunset.
Open paddock setting with natural grass.
Warm, inviting atmosphere.
UPPER portion softer/less detailed for text overlay - natural sky/background gradient.
Authentic German Offenstall/Koppel atmosphere.
Real documentary feel, NOT AI generated look.
Warm earth tones, sage green grass, golden sunset light."""

    # Bilder generieren
    results = []

    results.append(
        generate_image(
            prompt=desktop_prompt,
            aspect_ratio="16:9",
            output_path=output_dir / "hero-desktop.png",
        )
    )

    results.append(
        generate_image(
            prompt=mobile_prompt,
            aspect_ratio="9:16",
            output_path=output_dir / "hero-mobile.png",
        )
    )

    # Zusammenfassung
    print("\n" + "=" * 60)
    print("📊 ZUSAMMENFASSUNG")
    print("=" * 60)
    success_count = sum(results)
    print(f"   Erfolgreich: {success_count}/{len(results)}")

    if success_count == len(results):
        print("\n✅ Alle natürlichen Hero-Bilder wurden generiert!")
    else:
        print("\n⚠️  Nicht alle Bilder wurden generiert.")


if __name__ == "__main__":
    main()

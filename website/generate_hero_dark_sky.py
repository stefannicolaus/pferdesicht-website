#!/usr/bin/env python3
"""
Generiert Hero-Bild mit dunklem Himmel für bessere Text-Lesbarkeit
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
    print("🐴 PFERDESICHT - Hero mit dunklem Himmel")
    print("=" * 60)

    output_dir = Path(__file__).parent / "public" / "images" / "heroes"

    prompt = """Wide landscape photograph of a German open stable (Offenstall) at dramatic golden hour dusk.

COMPOSITION:
- TOP LEFT 60%: DARK dramatic sky - deep slate blue, charcoal clouds, moody atmosphere
- BOTTOM: 2-3 horses grazing on golden-lit green pasture, positioned center-left
- Wooden fence in background
- All horses FULLY visible, no cropping

LIGHTING:
- Golden hour from the right side
- DARK moody sky in upper left - essential for text readability
- Warm golden light ONLY on grass and horses
- High contrast between dark sky and lit foreground

CRITICAL:
- Upper left MUST be very dark (deep blues, grays, near-black) for white/gold text overlay
- NO bright sky, NO white clouds in upper left
- Think: dramatic storm approaching at sunset

STYLE: Editorial landscape photography, authentic German countryside, earth tones
ASPECT RATIO: 16:9 landscape
RESOLUTION: 1920x1080"""

    success = generate_image(
        prompt=prompt,
        aspect_ratio="16:9",
        output_path=output_dir / "hero-herde-dark-sky.png",
    )

    print("\n" + "=" * 60)
    if success:
        print("✅ Hero-Bild mit dunklem Himmel wurde generiert!")
    else:
        print("❌ Fehler bei der Bildgenerierung")
    print("=" * 60)


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Generiert Homepage Hero-Bilder (Desktop + Mobile) mit Imagen 4 API
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
    print("🐴 PFERDESICHT - Homepage Hero-Bilder")
    print("=" * 60)

    output_dir = Path(__file__).parent / "public" / "images" / "heroes"

    # Desktop Hero (16:9)
    desktop_prompt = """Editorial photograph of a brown horse with white blaze in a German paddock at golden hour.
Horse positioned in the RIGHT THIRD of frame, facing left toward camera.
LEFT 60% of image is visually quiet space with soft bokeh background - ideal for text overlay.
Relaxed natural posture, soft calm expression, warm golden light illuminating the coat.
Soft bokeh background with muted colors: sage green #78866b, warm brown #2c2a25, muted gold #c8a476.
NO bright colors, NO blue sky, NO distracting elements on the left side.
Golden hour lighting creating natural gradient: darker on left, lighter on the horse.
Documentary editorial style, NOT stock photo, NOT glamorous or staged.
Warm, intimate, contemplative mood. Slight film grain acceptable.
European stable atmosphere, authentic German horse pasture."""

    # Mobile Hero (9:16)
    mobile_prompt = """Editorial photograph of a brown horse with white blaze, portrait orientation, golden hour.
Horse positioned in LOWER 40% of frame, looking slightly upward toward camera.
UPPER 60% is visually quiet space with dark muted tones - ideal for text overlay.
Head and neck prominent, soft trusting expression, warm golden light on face and mane.
Upper portion dark muted tones blending into soft bokeh.
Color palette: sage green #78866b, warm brown #2c2a25, muted gold #c8a476.
NO bright colors, NO blue sky, NO distracting patterns in upper area.
Golden hour lighting from the side, darker at top, lighter illuminating the horse.
Documentary editorial aesthetic, NOT glamorous or staged.
Warm, intimate, contemplative mood. Slight film grain acceptable.
European stable atmosphere, authentic German horse paddock."""

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
        print("\n✅ Alle Bilder wurden generiert!")
        print("   Nächster Schritt: page.tsx wurde bereits aktualisiert.")
    else:
        print("\n⚠️  Nicht alle Bilder wurden generiert.")


if __name__ == "__main__":
    main()

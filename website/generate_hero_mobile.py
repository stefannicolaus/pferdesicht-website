#!/usr/bin/env python3
"""
Generiert Hero-Bild für Mobile - 9:16 Portrait, Pferde komplett sichtbar
"""

import os
from pathlib import Path
from dotenv import load_dotenv
from google import genai
from google.genai import types

# .env aus Hauptrepository laden (für Worktree-Kompatibilität)
env_paths = [
    Path(__file__).parent.parent / ".env",  # Worktree root
    Path("/Users/stefan/Documents/Pferdesicht/.env"),  # Main repo
]
for env_path in env_paths:
    if env_path.exists():
        load_dotenv(env_path)
        break

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
    print("🐴 PFERDESICHT - Hero Mobile: 9:16 Portrait")
    print("=" * 60)

    output_dir = Path(__file__).parent / "public" / "images" / "heroes"

    prompt = """A photo of a single horse in a German Offenstall summer pasture at golden hour, vertical portrait composition, shot with 50mm lens, f/2.8 aperture, warm golden sunset lighting.

Subject: One bay/chestnut horse grazing peacefully, head down eating grass. CRITICAL: Entire horse visible from ears to hooves, full body shot, no cropping. Horse positioned in MIDDLE of frame (not bottom), leaving generous space below the horse.

Upper 40%: Soft golden hour sky with warm tones, trees silhouetted on horizon. This area for text overlay.

Middle: Horse in natural grazing pose, surrounded by tall summer meadow grass (30-40cm) reaching above the horse's hooves.

Lower 20%: Extra grass/ground visible below the horse - generous bottom margin.

Environment: Tall lush summer meadow grass, wooden pasture fence in soft focus background, German countryside, golden hour sunset glow.

Composition: Horse centered vertically with MORE SPACE BELOW than above. Vertical portrait orientation. Rule of thirds - horse slightly off-center.

Style: Professional equine photography, Organic Luxury aesthetic, warm earthy golden tones, peaceful pastoral mood. High resolution, photorealistic.

Technical: Aspect ratio 9:16 portrait (1080x1920 pixels). No text, no watermarks. No cropped body parts."""

    success = generate_image(
        prompt=prompt,
        aspect_ratio="9:16",
        output_path=output_dir / "hero-mobile.jpg",
    )

    print("\n" + "=" * 60)
    if success:
        print("✅ Hero Mobile wurde generiert!")
        print("\nCheckliste:")
        print("  - [ ] Beide Pferde KOMPLETT sichtbar (Ohren bis Hufe)?")
        print("  - [ ] Obere 40% frei für Text?")
        print("  - [ ] Passt zum Desktop-Hero Stil?")
        print("  - [ ] Warme, natürliche Töne?")
        print("  - [ ] Keine Artefakte/Fehler?")
    else:
        print("❌ Fehler bei der Bildgenerierung")
    print("=" * 60)


if __name__ == "__main__":
    main()

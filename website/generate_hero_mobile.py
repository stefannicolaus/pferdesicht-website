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

    prompt = """A photo of two horses in a German Offenstall summer pasture, vertical portrait composition, shot with 50mm lens, f/2.8 aperture, golden hour lighting, soft natural light.

Subject: Two horses - one bay and one dark brown/black - in natural relaxed poses. One horse grazing, one standing alert looking toward camera. CRITICAL: Entire horses visible from ears to hooves, full body shot, no cropping. Horses positioned in lower 60% of frame.

Upper 40%: Soft blue summer sky with gentle white clouds, warm golden hour tones. This area must be clear for text overlay - no trees or objects blocking.

Environment: Tall summer meadow grass (20-25cm) reaching mid-leg of horses. Traditional wooden pasture fence visible in middle distance. German countryside setting with gentle rolling hills. Simple wooden shelter/Offenstall structure visible in far background.

Composition: Horses occupy lower portion of frame. Generous sky space above. Rule of thirds - horses slightly off-center. Vertical portrait orientation.

Style: Professional equine photography, Organic Luxury aesthetic, warm earthy tones, authentic pastoral mood. High resolution, photorealistic, editorial quality.

Mood: Peaceful, serene, trustworthy, natural horsemanship.

Technical: Aspect ratio 9:16 portrait (1080x1920 pixels). No text, no watermarks, no logos. No cropped body parts."""

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

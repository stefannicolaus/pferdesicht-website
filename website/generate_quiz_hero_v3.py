#!/usr/bin/env python3
"""
Generiert Quiz-Hero-Desktop-v3 mit Imagen 3 API
"""

import os
import io
from pathlib import Path
from dotenv import load_dotenv
from google import genai
from google.genai import types

# .env aus Parent-Verzeichnis laden
load_dotenv(Path(__file__).parent.parent / ".env")

# Wechsle ins Parent-Verzeichnis für korrekten .env Pfad
import sys
sys.path.insert(0, str(Path(__file__).parent.parent))

# API Client initialisieren
client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))

def main():
    print("\n" + "="*60)
    print("🐴 PFERDESICHT - Quiz Hero Desktop v3")
    print("="*60)

    output_path = Path(__file__).parent / "public" / "images" / "quiz-hero-desktop-v3.png"
    output_path.parent.mkdir(parents=True, exist_ok=True)

    prompt = """Editorial photography of a serene spring morning at a natural horse pasture.
Three horses grazing peacefully on fresh green grass with morning dew.
Soft golden hour light filtering through scattered trees.
Rolling hills in background with hint of mist.
Color palette: muted sage green #78866b, warm earth brown #2c2a25, soft gold accents #c8a476, cream tones #faf8f5.
Style: Organic Luxury, natural and authentic, high-end editorial.
Mood: calm, hopeful, the promise of spring.
No people, no buildings.
Wide-angle lens, shallow depth of field.
Professional equine photography."""

    print(f"\n📷 Generiere Bild...")
    print(f"   Prompt: {prompt[:80]}...")
    print(f"   Aspect Ratio: 16:9")

    try:
        response = client.models.generate_images(
            model="imagen-4.0-generate-001",
            prompt=prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                aspect_ratio="16:9",
            ),
        )

        if response.generated_images:
            image_data = response.generated_images[0].image.image_bytes

            with open(output_path, "wb") as f:
                f.write(image_data)

            file_size_kb = output_path.stat().st_size / 1024
            print(f"\n✅ Bild erfolgreich gespeichert:")
            print(f"   📁 {output_path}")
            print(f"   💾 Dateigröße: {file_size_kb:.1f} KB")
        else:
            print("❌ Keine Bildantwort von Imagen erhalten")

    except Exception as e:
        print(f"\n❌ Fehler: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()

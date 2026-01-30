#!/usr/bin/env python3
"""
Pferdesicht - Google Gemini Image Generation Test Script
Generiert Bilder im Pferdesicht CI für Videokurs-Infografiken
"""

import os
import base64
from pathlib import Path
from dotenv import load_dotenv
from google import genai
from google.genai import types

# .env laden
load_dotenv()

# API Client initialisieren
client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))

# Pferdesicht CI Prompt
PROMPT = """Generate an image: Minimalist illustration of a horse silhouette on a misty spring meadow at dawn. Soft, muted color palette: sage green (#78866b), warm earth tones (#2c2a25), and subtle gold accents (#c8a476). Organic luxury aesthetic, clean lines, no text. Professional, Scandinavian design style. Suitable for premium equestrian brand. Soft morning light, dreamy atmosphere, high-end editorial feel."""

def generate_image():
    """Generiert ein Bild mit Gemini und speichert es im assets Ordner"""

    print("🐴 Pferdesicht Gemini Image Generation Test")
    print("-" * 50)
    print(f"Prompt: {PROMPT[:80]}...")
    print("-" * 50)
    print("⏳ Generiere Bild...")

    # Bild generieren mit Gemini 2.0 Flash
    response = client.models.generate_content(
        model="gemini-2.5-flash-image",
        contents=PROMPT,
        config=types.GenerateContentConfig(
            response_modalities=["IMAGE", "TEXT"],
        )
    )

    # Speicherpfad
    assets_dir = Path(__file__).parent.parent / "assets"
    assets_dir.mkdir(exist_ok=True)
    output_path = assets_dir / "test_gemini_horse_silhouette.png"

    # Bild aus Response extrahieren und speichern
    for part in response.candidates[0].content.parts:
        if part.inline_data is not None:
            image_data = part.inline_data.data
            with open(output_path, "wb") as f:
                f.write(image_data)
            print(f"✅ Bild gespeichert: {output_path}")
            return output_path
        elif part.text is not None:
            print(f"📝 Model response: {part.text}")

    print("❌ Kein Bild in der Response gefunden")
    return None

if __name__ == "__main__":
    generate_image()

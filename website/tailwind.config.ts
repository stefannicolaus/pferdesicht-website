import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pferdesicht Brand Colors
        loam: {
          DEFAULT: "#2c2a25",
          50: "#f7f6f5",
          100: "#eeedeb",
          200: "#dddbd7",
          300: "#c5c2bc",
          400: "#a9a59d",
          500: "#918b81",
          600: "#7a7469",
          700: "#635e56",
          800: "#4a4742",
          900: "#2c2a25",
          950: "#1a1917",
        },
        sage: {
          DEFAULT: "#78866b",
          50: "#f6f7f5",
          100: "#ebeee8",
          200: "#d7dcd1",
          300: "#b8c2ad",
          400: "#96a586",
          500: "#78866b",
          600: "#5f6b54",
          700: "#4c5644",
          800: "#3f4639",
          900: "#353b30",
          950: "#1b1f18",
        },
        gold: {
          DEFAULT: "#c8a476",
          50: "#fbf8f3",
          100: "#f6efe3",
          200: "#ecddc6",
          300: "#dfc5a0",
          400: "#c8a476",
          500: "#bc8d58",
          600: "#ae794b",
          700: "#916140",
          800: "#764f39",
          900: "#614231",
          950: "#342118",
        },
        "bg-light": "#f3f0eb",
        paper: "#faf9f7",
      },
      fontFamily: {
        serif: ["var(--font-eb-garamond)", "Georgia", "serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Typographic scale for Pferdesicht
        "display-1": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-2": ["3.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "heading-1": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-2": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "heading-3": ["1.875rem", { lineHeight: "1.3" }],
        "heading-4": ["1.5rem", { lineHeight: "1.35" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "caption": ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(44, 42, 37, 0.07), 0 10px 20px -2px rgba(44, 42, 37, 0.04)",
        "soft-lg": "0 10px 40px -10px rgba(44, 42, 37, 0.1), 0 20px 50px -10px rgba(44, 42, 37, 0.05)",
        "warm": "0 4px 20px -5px rgba(200, 164, 118, 0.25)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "subtle-pulse": "subtlePulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        subtlePulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

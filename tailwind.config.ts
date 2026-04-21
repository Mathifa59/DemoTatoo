import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background palette — true blacks
        "bg-primary": "#000000",
        "bg-secondary": "#0a0a0a",
        "bg-card": "#1a1a1a",
        "bg-elevated": "#2a2a2a",
        // Text palette
        "text-primary": "#f5f0eb",
        "text-secondary": "#c4c4c4",
        "text-muted": "#888888",
        // Accent colors
        "wine-red": "#8b2252",
        "wine-red-light": "#a0324e",
        "gold": "#c9a96e",
        "gold-light": "#d4af37",
        "warm-beige": "#c4a882",
        // Functional
        "whatsapp-green": "#25D366",
        "error-red": "#ef4444",
        "success-green": "#22c55e",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        "8xl": ["6rem", { lineHeight: "1.05" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      spacing: {
        "128": "32rem",
        "160": "40rem",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

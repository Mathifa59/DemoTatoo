import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ink-black backgrounds (sumi)
        "ink-void": "#05050a",
        "ink-black": "#0b0b10",
        "ink-deep": "#121218",
        "ink-card": "#16161d",
        "ink-elevated": "#1f1f28",
        // Paper / ivory (washi)
        "washi": "#e8dcc4",
        "washi-muted": "#c9bfa8",
        "bone": "#f1ead8",
        // Blood / vermilion (shu-iro)
        "blood": "#7a0a12",
        "blood-deep": "#4a0508",
        "vermilion": "#a61b29",
        "vermilion-light": "#c62828",
        // Aged gold / brass (kin)
        "kin": "#b8860b",
        "kin-dark": "#8a6508",
        "kin-light": "#d4a93a",
        // Indigo / night (ai)
        "ai": "#1a1f3a",
        "ai-deep": "#0e1226",
        // Aliases kept for backwards compat (map to new tokens)
        "bg-primary": "#05050a",
        "bg-secondary": "#0b0b10",
        "bg-card": "#16161d",
        "bg-elevated": "#1f1f28",
        "text-primary": "#e8dcc4",
        "text-secondary": "#b9ad93",
        "text-muted": "#6b6557",
        "wine-red": "#7a0a12",
        "wine-red-light": "#a61b29",
        "gold": "#b8860b",
        "gold-light": "#d4a93a",
        "warm-beige": "#c9bfa8",
        // Functional
        "whatsapp-green": "#25D366",
        "error-red": "#ef4444",
        "success-green": "#22c55e",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        jp: ["var(--font-jp)", "serif"],
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
      backgroundImage: {
        "washi-paper":
          "radial-gradient(circle at 20% 10%, rgba(232,220,196,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(184,134,11,0.04) 0%, transparent 50%)",
        "ink-fade":
          "linear-gradient(180deg, #05050a 0%, #0b0b10 50%, #05050a 100%)",
        "blood-mist":
          "radial-gradient(ellipse at center, rgba(166,27,41,0.18) 0%, transparent 65%)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ink-drift": "inkDrift 18s ease-in-out infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        inkDrift: {
          "0%, 100%": { transform: "translate(0,0) scale(1)", opacity: "0.35" },
          "50%": { transform: "translate(20px,-15px) scale(1.05)", opacity: "0.55" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

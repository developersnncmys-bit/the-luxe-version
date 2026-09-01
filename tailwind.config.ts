import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        onyx: "#141414",
        graphite: "#1F1F1F",
        chalk: "#FAFAFA",
        bone: "#EFEBE4",
        fog: "#8A857D",
        champagne: "#D9C7A7",
        brass: "#B08D57"
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter Tight", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        micro: "0.22em",
        editorial: "0.28em",
        tight: "-0.01em",
        tighter: "-0.02em"
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 8rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 5.2vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.005em" }],
        micro: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.22em" }]
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.22, 1, 0.36, 1)",
        curtain: "cubic-bezier(0.77, 0, 0.175, 1)"
      },
      maxWidth: {
        editorial: "90rem"
      }
    }
  },
  plugins: []
};

export default config;

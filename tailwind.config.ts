import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-white": "hsl(var(--color-custom-white))",
        primary: "hsl(var(--color-primary))",
        secondary: "hsl(var(--color-secondary))",
        accent: "hsl(var(--color-accent))",
        muted: {
          DEFAULT: "hsl(var(--color-muted))",
          foreground: "hsl(var(--color-foreground))",
        },
      },

      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "fade-in": {
          from: { opacity: "50%" },
          to: { opacity: "100%" },
        },
        "color-in": {
          from: { filter: "grayscale(100%) brightness(50%) saturate(2)" },
          to: { filter: "grayscale(0%) brightness(50%) saturate(2)" },
        },
      },
      animation: {
        "infinite-scroll-lr": "infinite-scroll 30s linear infinite",
        "infinite-scroll-rl": "infinite-scroll 25s linear reverse",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "color-in": "color-in 2.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;

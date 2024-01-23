import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ["var(--font-dm-serif-display)"],
        antic: ["var(--font-antic)"],
        dekko: ["var(--font-dekko)"],
      },
      colors: {
        white: "#EDF0F3",
        navy: "#274C77",
        blue: "#6096BA",
        lightblue: "#A3CDF1",
        gray: "#8B8C89",
        yellow: "#ffd60a",
        orange: "#ffc300",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(2px)" },
          "50%": { transform: "translateY(0px)" },
          "75%": { transform: "translateY(-2px)" },
          "100%": { transform: "translateY(0px)" },
        },
        wave: {
          // "0%": { transform: "translateX(2px)" },
          // "50%": { transform: "translateX(-2px)" },
          // "100%": { transform: "translateX(2px)" },
          // "25%": { transform: "translateX()" },
          // "75%": { transform: "translateX(-2rem)" },
          // "100%": { transform: "translateX(0px)" },
        },
        bg: {
          "0%, 100%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        wiggle: "wiggle 0.75s ease-in-out infinite",
        bg: "bg 10s ease-in-out infinite",
        // wave: "wave 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

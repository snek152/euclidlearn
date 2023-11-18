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
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(2px)" },
          "50%": { transform: "translateY(-2px)" },
          "100%": { transform: "translateY(2px)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

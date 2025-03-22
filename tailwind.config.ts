import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "inherit",
            a: {
              color: "inherit",
              textDecoration: "none",
            },
            h1: {
              color: "inherit",
            },
            h2: {
              color: "inherit",
            },
            h3: {
              color: "inherit",
            },
            h4: {
              color: "inherit",
            },
            strong: {
              color: "inherit",
            },
            code: {
              color: "inherit",
            },
            pre: {
              color: "inherit",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
  safelist: [
    "bg-gray-300",
    "bg-gray-400",
    "bg-gray-600",
    "bg-gray-700",
    "dark:bg-gray-700",
    "dark:bg-gray-600",
  ],
};

export default config;

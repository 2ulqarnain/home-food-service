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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          400: "var(--primary-light)",
          500: "var(--primary)",
          600: "var(--primary-dark)",
          DEFAULT: "var(--primary)",
        },
        secondary: {
          400: "var(--secondary-light)",
          500: "var(--secondary)",
          600: "var(--secondary-dark)",
        },
      },
      fontFamily: {
        fugaz: "var(--font-fugaz)",
      },
    },
  },
  plugins: [],
};
export default config;

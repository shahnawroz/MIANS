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
        primary: "#E9E9E9",
        secondary: "#fafafa ",
        thirdbgcolor: "#000000",
        textprimarycolor: "#50505F",
        textsecondarycolor: "#000000"
      },
    },
  },
  plugins: [],
};
export default config;

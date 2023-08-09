import type { Config } from "tailwindcss";

const content: string[] = ["./src/**/*.{js,jsx,ts,tsx}"];

export const theme = {
  extend: {
    screens: {
      sm: "640px",
      md: "768px",
      xl: "1280px",
    },
  },
  container: {
    center: true,
  },
};

export const plugins = [];

const tailwindConfig: Config = {
  content,
  theme,
  plugins,
};

export default tailwindConfig;

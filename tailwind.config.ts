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
        background: "#36436F",
        highlight: "#B6000F",
        highlightDarken: "#a3000d",
        offWhite: "#F4F4F4",
        offBlack: "#24282B",
        link: "#A7D0D6"
      },
      screens: {
        'lg': '980px',
      }
    },
  },
  plugins: [],
};
export default config;

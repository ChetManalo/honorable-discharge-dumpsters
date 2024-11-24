import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blueGradient': 'linear-gradient(to bottom, #003366, #002d5b)',
        'redGradient': 'linear-gradient(to bottom, #B6000F, #a3000d)',
        'redGradientReverse': 'linear-gradient(to bottom, #a3000d, #B6000F)',
        'darkGradient': 'linear-gradient(to bottom, #24282b, #202426)',
        'darkGradientReverse': 'linear-gradient(to bottom, #202426, #24282b)',
      },
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
      },
      fontFamily: {
        header: ['var(--font-oswald)']
      }
    },
  },
  plugins: [],
};
export default config;

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
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        corinthia: ['Corinthia', 'serif'],
      },
      colors: {
        'mountain-meadow': {
        '50': '#ecfdf6',
        '100': '#d2f9e6',
        '200': '#a9f1d3',
        '300': '#71e4ba',
        '400': '#2dbc8d',
        '500': '#14b586',
        '600': '#08936d',
        '700': '#07755a',
        '800': '#085d48',
        '900': '#084c3c',
        '950': '#032b22',
    },
        "blue-15": "#1A2130",
        "blue-20": "#5A72A0",
        "blue-30": "#83B4FF",
        "blue-40": "#FDFFE2",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

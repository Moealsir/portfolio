import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'white-xl': '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        corinthia: ['Corinthia', 'serif'],
      },
      colors: {
        'paradiso': {
        '50': '#f4f9f9',
        '100': '#daedeb',
        '200': '#b4dbd7',
        '300': '#87c1be',
        '400': '#5ea3a2',
        '500': '#408080',
        '600': '#356a6c',
        '700': '#2d5658',
        '800': '#284647',
        '900': '#243c3d',
        '950': '#112022',
    },

        'minti': {
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
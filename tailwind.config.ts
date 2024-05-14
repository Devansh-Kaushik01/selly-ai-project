import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        // 'container': '1400px',
      },
      colors: {
        'blue': '#0000ff',
        'lightgray': "#6f8288",
        'black' : "#15171a"
      },
      screens: {
      'sm': '640px',
      'md': '1024px',
      'lg': '1280px' ,
      "2xl" : '1440px'
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "4rem",
        "2xl": "6rem",
      }}
    },
  },
  plugins: [],
};
export default config;

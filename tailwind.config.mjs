/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0B0D17",
        lightGray: "#D0D6F9",
        darkGray: "#707070",
        midGray: "#979797",
        white: "#FFFFFF",
      },
      fontFamily:{
        barlow: ["var(--font-barlow)", "sans-serif"],
        bellefair: ["var(--font-bellefair)", "serif"],
      }
    },
  },
  plugins: [],
};

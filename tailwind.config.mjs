import { crew, destinations, technology } from "./app/constants";

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
      fontFamily: {
        barlow: ["var(--font-barlow)", "sans-serif"],
        bellefair: ["var(--font-bellefair)", "serif"],
      },
      backgroundImage: {
        homeDesktop: "url(/images/home/background-home-desktop.jpg)",
        homeTablet: "url(/images/home/background-home-tablet.jpg)",
        homeMobile: "url(/images/home/background-home-mobile.jpg)",
        destinationsDesktop:
          "url(/images/destinations/background-destinations-desktop.jpg)",
        destinationsTablet:
          "url(/images/destinations/background-destinations-tablet.jpg)",
        destinationsMobile:
          "url(/images/destinations/background-destinations-mobile.jpg)",
        technologyDesktop:
          "url(/images/technology/background-technology-desktop.jpg)",
        technologyTablet:
          "url(/images/technology/background-technology-tablet.jpg)",
        technologyMobile:
          "url(/images/technology/background-technology-mobile.jpg)",
        crewDesktop: "url(/images/crew/background-crew-desktop.jpg)",
        crewTablet: "url(/images/crew/background-crew-tablet.jpg)",
        crewMobile: "url(/images/crew/background-crew-mobile.jpg)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        designColor: "#ff014f",
        bannerViolet: "#7c3aed",
        bannerVioletDark: "#5b21b6",
        customBlue: "#ADB7DC",
        lightText: "#E5E7EB",   // used in your contact inputs
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"], // keep Inter also
      },
      boxShadow: {
        shadowOne: "0 4px 15px rgba(1,1,0,10.9)",
        shadowTwo: "0 4px 15px rgb(255,255,255,0.1)",
      },
    screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

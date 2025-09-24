/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        designColor: "#ff014f",
        bannerViolet: "#7c3aed",
        bannerVioletDark: "#5b21b6",
        customBlue: "#ADB7DC",
        lightText: "#E5E7EB",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        shadowOne: "0 4px 15px rgba(0,0,0,0.5)",
        shadowTwo: "0 4px 15px rgb(255,255,255,0.1)",
      },
      keyframes: {
        shakeSide: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
      animation: {
        shakeSide: 'shakeSide 0.5s infinite',
      },
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
  plugins: [], // ✅ only one empty array is enough
};

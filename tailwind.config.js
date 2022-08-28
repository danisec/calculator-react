/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat Alternates", "sans-serif"],
    },
    extend: {
      colors: {
        "body-bg": "#F5F5F5",
        "txt-color": "#6D6D6D",
        "txt-white": "#FFF",
        "calc-res-color": "#2F2D2F",
        "calc-btn-color": "#D400FF",
        "calc-bg": "#FFF",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{


    },
    extend: {
      colors: {
        zerf: {
          DEFAULT: "#8640FF",
          contrast: "#232020",
        },
        riquissima: {
          DEFAULT: "#A95042",
          contrast: "#A95042",
        },
        fondo: {
          DEFAULT: "#F5F5F5",
          contrast: "#F5F5F5",
        },
      },
    },
  },
  plugins: [],
};

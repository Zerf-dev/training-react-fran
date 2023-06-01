/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-rubik)"],
        archivo: ["var(--font-archivo)"],
        rubik: ["var(--font-rubik)"],
      },
      colors: {
        zerf: {
          DEFAULT: "#8640FF",
          contrast: "#232020",
        },
        riquissima: {
          DEFAULT: "#A95042",
          contrast: "#A95042",
        },
        background: {
          DEFAULT: "#F5F5F5",
          contrast: "#F5F5F5",
        },
        backgroundRecipe: {
          DEFAULT: "#FCFAFA",
          contrast: "#F9F0EF",
        },
      },
    },
  },
  plugins: [],
};

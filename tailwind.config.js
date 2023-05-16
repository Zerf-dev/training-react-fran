/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zerf: {
          DEFAULT: "#8640FF",
          contrast: "#232020",
        },
      },
    },
  },
  plugins: [],
};

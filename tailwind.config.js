/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          default: {
            bg: "#FFD77E",
            text: "#B43F4B",
          },
          purple: {
            bg: "#F9D2E0",
            text: "#3F51A0",
          },
          cyan: {
            bg: "#FBD4CA",
            text: "#03839D",
          },
          black: {
            bg: "#ffd87e",
            text: "#050606",
          },
        },
      },
    },
  },
  plugins: [],
};

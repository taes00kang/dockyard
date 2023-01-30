/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          theme1: {
            bg: "#FFD77E",
            text: "#B43F4B",
          },
          theme2: {
            bg: "#F9D2E0",
            text: "#3F51A0",
          },
          theme3: {
            bg: "#FBD4CA",
            text: "#03839D",
          },
          theme4: {
            bg: "#ffd87e",
            text: "#050606",
          },
        },
      },
    },
  },
  plugins: [],
};

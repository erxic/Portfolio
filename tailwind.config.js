/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".\\*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        cyan1: "#06b6d4",
        purple1: "#efbbff",
        purple2: "#d896ff",
        purple3: "#be29ec",
        purple4: "#800080",
        purple5: "#660066",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

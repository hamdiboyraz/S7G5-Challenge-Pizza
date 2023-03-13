/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FDC913",
        "light-gray": "#5F5F5F",
        "dark-gray": "#292929",
        red: "#CE2829",
        beige: "#FAF7F2",
      },
      fontFamily: {
        Barlow: ["Barlow"],
        Quattrocento: ["Quattrocento"],
        Satisfy: ["Satisfy"],
      },
      backgroundImage: {
        home: "url('./assets/mvp-banner.png')",
      },
    },
  },
  plugins: [],
};

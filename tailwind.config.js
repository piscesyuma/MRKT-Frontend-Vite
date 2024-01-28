/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        secbg:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04))",
        dropDown:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04))",
        card: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
        cardimg: "url('./assets/images/cardnft.png')",
      },
      colors: {
        opacity10: "#ffffff10",
        sysDark: "#1D1D1D",
        sysPink: "#FF4EB5",
        sysSuccess: "#31D669",
      },
      fontFamily: {
        MarvinVisions: "MarvinVisions",
        Poppins: "Poppins",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

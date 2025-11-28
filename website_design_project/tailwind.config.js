/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gradientBackgroud:
          "bg-[radial-gradient(ellipse_at_top_right,#1AE6CE,#02302e,#02302e)]",
        customDarkTeal: "#005F56",
        customLightTeal: "#00B3A6",

        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(225, 255, 255 ,0.7)",
        dimBlue: "rgb(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      ls: "1700px",
    },
  },
  plugins: [],
};

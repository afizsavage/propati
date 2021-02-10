const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-image": "url('/undraw_at_home_octe.svg')",
      }),
      height: (theme) => ({
        100: "30rem",
      }),
      colors: (theme) => ({
        teal: colors.teal,
      }),
      fontFamily: (theme) => ({
        Oswald: ["Georgia", "serif"],
        Lato: ["Lato", "Arial", "sans-serif"],
      }),
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
      boxShadow: ["active"],
      borderColor: ["active"],
    },
  },
  plugins: [],
};

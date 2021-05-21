const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function ({ addComponents }) {
      const buttons = {
        ".activePropType": {
          backgroundColor: "#3490dc",
          color: "#fff",
          fontWeight: "700",
        },
      };

      addComponents(buttons, {
        variants: ["first"],
      });
    }),
  ],
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-image": "url('/undraw_at_home_octe.svg')",
        "item-under": "url('/images/17545.png')",
      }),
      height: (theme) => ({
        100: "30rem",
        cardLeft: "100%",
      }),
      colors: (theme) => ({
        teal: colors.teal,
      }),
      fontFamily: (theme) => ({
        Oswald: ["Georgia", "serif"],
        Lato: ["Lato", "Arial", "sans-serif"],
      }),
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
      boxShadow: ["active"],
      borderColor: ["active", "responsive", "hover", "focus", "focus-within"],
      backgroundColor: ["active", "hover"],
      borderWidth: ["last", "hover"],
    },
  },
};

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-image": "url('/undraw_at_home_octe.svg')",
      }),
      height: (theme) => ({
        "112": "28rem",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

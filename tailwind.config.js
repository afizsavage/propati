const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(function ({ addComponents }) {
      const buttons = {
        '.activePropType': {
          backgroundColor: '#3490dc',
          color: '#fff',
          fontWeight: '700',
        },
      };

      addComponents(buttons, {
        variants: ['first'],
      });
    }),
    require('@tailwindcss/aspect-ratio'),
  ],
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-image': "url('/undraw_at_home_octe.svg')",
        'item-under': "url('/images/17545.png')",
      }),
      height: (theme) => ({
        100: '30rem',
        200: '50rem',
        cardLeft: '100%',
        inboxContainer: '68%',
        topContainer: '10.4%',
      }),
      colors: (theme) => ({
        teal: colors.teal,
        orange: '#ea9a3e',
      }),
      fontSize: {
        '4xl': '2.50rem',
      },
      fontFamily: (theme) => ({
        Lato: ['Lato', 'Arial', 'sans-serif'],
        Noto: ['Noto Serif', 'serif'],
      }),
      zIndex: {
        '-1': '-1',
      },
      screens: {
        xlg: '1200px',
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
      boxShadow: ['active'],
      borderColor: ['active', 'responsive', 'hover', 'focus', 'focus-within'],
      backgroundColor: ['active', 'hover'],
      borderWidth: ['last', 'hover'],
      backgroundOpacity: ['hover'],
      padding: ['last'],
      margin: ['last', 'first'],
      textColor: ['active'],
      opacity: ['disabled'],
    },
  },
};

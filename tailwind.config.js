const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'selector',
  theme: {
    colors: {
      'black': '#000',
      'bg-light': '#FFF',
      'surface-light': '#EEF9FF',
      'primary-light': '#2EA0FF',
      'primary-variant-light': '#146CE1',
      'secondary-light': '#1756B6',
      'secondary-variant-light': '#142E57',
      'tertiary-light': '#D9F0FF',
      'warning-light': '#FF352E',
      'bg-dark': '#142E57',
      'surface-dark': '#1756B6',
      'primary-dark': '#146CE1',
      'primary-variant-dark': '#2EA0FF',
      'secondary-dark': '#1B83F5',
      'secondary-variant-dark': '#59C0FF',
      'tertiary-dark': '#1756B6',
      'warning-dark': '#E02914',
    },
    extend: {
      backgroundImage: (theme) => ({
        'gradient-light': `linear-gradient(to right, #EEF9FF, #FFF)`,
        'gradient-dark': `linear-gradient(to right, #1756B6, #142E57)`,
      }),
    },
  },
  plugins: [
    plugin(function({addUtilities}){
      addUtilities({
        '.btn-light': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '.375rem',
          backgroundColor: '#D9F0FF',
          color: 'black'
        },
        '.btn-dark': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '.375rem',
          backgroundColor: '#1756B6',
          color: 'white'
        },
      })
    })
  ],
}


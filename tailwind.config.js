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
          color: 'black',
          border: '0',
          '&:hover': {
            border: '1px solid #2EA0FF',
          },
          '&:active' : {
            border: '1px solid #1756B6',
            boxShadow: '1px 0 6px rgba(23, 86, 182, 0.25), -1px 0 6px rgba(23, 86, 182, 0.25), 0 1px 6px rgba(23, 86, 182, 0.25), 0 -1px 6px rgba(23, 86, 182, 0.25)'
          }
        },
        '.btn-dark': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '.375rem',
          backgroundColor: '#1756B6',
          color: 'white',
          '&:hover': {
            border: '1px solid #146CE1',
          },
          '&:active' : {
            border: '1px solid #1B83F5',
            boxShadow: '1px 0 6px rgba(27, 131, 245, 0.25), -1px 0 6px rgba(27, 131, 245, 0.25), 0 1px 6px rgba(27, 131, 245, 0.25), 0 -1px 6px rgba(27, 131, 245, 0.25)'
            }
        },
        '.btn2-light': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '.375rem',
          backgroundColor: '#2EA0FF',
          color: 'black',
          border: '0',
          '&:hover': {
            border: '1px solid #1756B6',
          },
          '&:active' : {
            border: '1px solid #142E57',
            boxShadow: '1px 0 6px rgba(23, 86, 182, 0.25), -1px 0 6px rgba(23, 86, 182, 0.25), 0 1px 6px rgba(23, 86, 182, 0.25), 0 -1px 6px rgba(23, 86, 182, 0.25)'
          }
        },
        '.btn2-dark': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '.375rem',
          backgroundColor: '#146CE1',
          color: 'white',
          '&:hover': {
            border: '1px solid #2EA0FF',
          },
          '&:active' : {
            border: '1px solid #59C0FF',
            boxShadow: '1px 0 6px rgba(27, 131, 245, 0.25), -1px 0 6px rgba(27, 131, 245, 0.25), 0 1px 6px rgba(27, 131, 245, 0.25), 0 -1px 6px rgba(27, 131, 245, 0.25)'
            }
        },
      })
    })
  ],
}


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
      'surface-light': '#EEF9FF', // rgb(238, 249, 255)
      'primary-light': '#2EA0FF', //rgb(46, 160, 255)
      'primary-variant-light': '#146CE1', // rgb (20, 108, 225)
      'secondary-light': '#1756B6', // rgb(23, 86, 182)
      'secondary-variant-light': '#142E57', // rgb(20, 46, 87)
      'tertiary-light': '#D9F0FF', // rgb(217, 24à, 255)
      'warning-light': '#FF352E', // rgb(255, 53, 46)
      'careful-light': '#FF7E2E', // rgb(255, 126, 46)
      'bg-dark': '#142E57', // rgb(20, 46, 87)
      'surface-dark': '#1756B6', // rgb(23, 86, 182)
      'primary-dark': '#146CE1', // rgb (20, 108, 225)
      'primary-variant-dark': '#2EA0FF', //rgb(46, 160, 255)
      'secondary-dark': '#1B83F5', // rgb(27, 131, 245)
      'secondary-variant-dark': '#59C0FF', // rgb(89, 192, 255)
      'tertiary-dark': '#1756B6', // rgb(23, 86, 182)
      'warning-dark': '#E02914', // rgb(224, 41, 20)
      'careful-dark': '#E07014', // rgb(224, 112, 20)
    },
    extend: {
      backgroundImage: (theme) => ({
        'gradient-light': `linear-gradient(to bottom, #EEF9FF, #FFF)`,
        'gradient-dark': `linear-gradient(to bottom, #1756B6, #142E57)`,
      }),
    },
  },
  plugins: [
    plugin(function({addUtilities}){
      addUtilities({
        '.button': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '.375rem',
        },
        '.text-button': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '.375rem',
          padding: '0 16px'
        },
        '.btn-primary-light': {
          backgroundColor: '#2EA0FF',
          color: 'black',
          '&:hover': {
            outline: '1px solid #146CE1',
          },
          '&:active' : {
            outline: '1px solid #1756B6',
            boxShadow: 'rgba(23, 86, 182, 0.75) 0px 2px 10px'
          }
        },
        '.btn-primary-dark': {
          backgroundColor: '#146CE1',
          color: 'white',
          '&:hover': {
            outline: '1px solid #1B83F5',
          },
          '&:active' : {
            outline: '1px solid #2EA0FF',
            boxShadow: 'rgba(46, 160, 255, 0.75) 0px 2px 10px'
            }
        },
        '.btn-secondary-light': {
          backgroundColor: '#1756B6',
          color: 'white',
          '&:hover': {
            outline: '1px solid #146CE1',
          },
          '&:active' : {
            outline: '1px solid #2EA0FF',
            boxShadow: 'rgba(46, 160, 255, 0.75) 0px 2px 10px'
          }
        },
        '.btn-secondary-dark': {
          backgroundColor: '#1B83F5',
          color: 'black',
          '&:hover': {
            outline: '1px solid #146CE1',
          },
          '&:active' : {
            outline: '1px solid #2EA0FF',
            boxShadow: 'rgba(46, 160, 255, 0.75) 0px 2px 10px'
            }
        },
        '.btn-tertiary-light': {
          backgroundColor: '#D9F0FF',
          color: 'black',
          '&:hover': {
            outline: '1px solid #2EA0FF',
          },
          '&:active' : {
            outline: '1px solid #146CE1',
            boxShadow: 'rgba(20, 108, 225, 0.75) 0px 2px 10px'
          }
        },
        '.btn-tertiary-dark': {
          backgroundColor: '#1756B6',
          color: 'white',
          '&:hover': {
            outline: '1px solid #146CE1',
          },
          '&:active' : {
            outline: '1px solid #1B83F5',
            boxShadow: 'rgba(27, 131, 245, 0.75) 0px 2px 10px'
            }
        },
        '.btn-warning-light': {
          backgroundColor: '#FF352E',
          color: 'dark',
          '&:hover': {
            outline: '1px solid #E02914',
          },
          '&:active' : {
            outline: '1px solid #BC2914',
            boxShadow: 'rgba(188, 41, 20, 0.75) 0px 2px 10px'
            }
        },
        '.btn-warning-dark': {
          backgroundColor: '#E02914',
          color: 'dark',
          '&:hover': {
            outline: '1px solid #FF352E',
          },
          '&:active' : {
            outline: '1px solid #FF0801',
            boxShadow: 'rgba(255, 8, 1, 0.75) 0px 2px 10px'
            }
        },
      })
    })
  ],
}


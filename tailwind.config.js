/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

// @TODO: components, utils, base + sizes
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '600px',
      'md': '960px',
      'lg': '1200px',
    },
    fontFamily: {
      sans: ['Bubblegum Sans', 'sans-serif'],
      serif: ['Neuton', 'serif'],
    },
    fontSize: {
      none: '0',
      sm: '16px',
      base: '20px',
      md: '40px',
      xl: '48px',
      '2xl': '128px',
    },
    colors: {
      'white': '#FFFFFF',
      'gray': {
        '100': '#F5F5F5',
        '200': '#D6D6D6',
        '300': '#8C8C8C',
        '400': '#544F57',
      },
      'primary': {
        '100': '#F2B2B7',
        '200': '#DA4A54',
        '300': '#B25259',
        '400': '#A2232C',
      },
      'secondary': {
        '100': '#DFF0B0',
        '200': '#AED448',
        '300': '#94AD50',
        '400': '#7C9D22',
      },
      'green': {
        '100': '#9DD6D6',
        '200': '#2E8686',
        '300': '#156464',
      },
    },
    extend: {
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
      }
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities, addComponents, theme }) {
      addBase({
        'body': {
          fontFamily: theme('fontFamily.serif'),
          fontSize: theme('fontSize.base'),
          lineHeight: '1.5',
          backgroundColor: '#e4e9ee',
          color: theme('colors.gray.400'),
        },
        'h1': {
          fontFamily: theme('fontFamily.sans'),
          fontSize: theme('fontSize.2xl'),
        },
        'h2': {
          fontFamily: theme('fontFamily.sans'),
          fontSize: theme('fontSize.xl'),
        },
        'label': {
          fontWeight: '700',
          fontSize: theme('fontSize.sm'),
          textTransform: 'lowercase',
          color: theme('colors.gray.300'),
        },
        'input': {
          boxSizing: 'border-box',
          padding: theme('spacing.2'),
          backgroundColor: theme('colors.white'),
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: theme('colors.gray.200'),
          borderRadius: theme('borderRadius.md'),
          fontFamily: theme('fontFamily.serif'),
          fontSize: theme('fontSize.base'),
          lineHeight: '1.5',
          color: theme('colors.gray.400'),
          outline: 'none',
          apperance: 'none',
        },
        'input::placeholder ': {
          fontFamily: theme('fontFamily.serif'),
          fontSize: theme('fontSize.base'),
          lineHeight: '1.5',
          color: theme('colors.gray.200'),
        },
        'input:focus': {
          borderColor: theme('colors.secondary.300'),
        },
        'input:invalid': {
          borderColor: theme('colors.primary.300'),
        },
        'select': {
          boxSizing: 'border-box',
          padding: theme('spacing.2'),
          backgroundColor: theme('colors.white'),
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: theme('colors.gray.200'),
          borderRadius: theme('borderRadius.md'),
          fontFamily: theme('fontFamily.serif'),
          fontSize: theme('fontSize.base'),
          lineHeight: '1.5',
          color: theme('colors.gray.400'),
          outline: 'none',
        },
        'select:focus': {
          borderColor: theme('colors.secondary.300'),
        },
      }),
      addUtilities({
        '.grid-gradient': {
          background: `
            linear-gradient(${theme('colors.secondary.400')}, transparent ${theme('spacing.1')}),
            linear-gradient(90deg, ${theme('colors.secondary.400')} 0, transparent ${theme('spacing.1')})
          `,
          backgroundSize: '12px 12px',
          backgroundPosition: 'center center',
        } 
      }),
      addComponents({
        '.btn': {
          display: 'inline-block',
          textAlign: 'center',
          fontWeight: 'bold',
          textDecoration: 'none',
          lineHeight: '1.5',
          boxSizing: 'border-box',
          borderWidth: '2px',
          borderStyle: 'solid', 
          outline: 'none',
          cursor: 'pointer',
          transition: 'background-color border-color color 0.25s',
        },
        '.btn-primary': {
          backgroundColor: theme('colors.primary.200'),
          borderColor: theme('colors.primary.200'),
          color: theme('colors.white'),
        },
        '.btn-primary:hover': {
          backgroundColor: theme('colors.primary.300'),
          borderColor: theme('colors.primary.300'),
        },
        '.btn-primary:focus': {
          backgroundColor: theme('colors.primary.400'),
          borderColor: theme('colors.primary.400'),
        },
        '.btn-primary:active': {
          backgroundColor: theme('colors.primary.400'),
          borderColor: theme('colors.primary.400'),
        },
        '.btn-primary[disabled]': {
          backgroundColor: theme('colors.primary.100'),
          borderColor: theme('colors.primary.100'),
        },
        '.btn-secondary': {
          backgroundColor: theme('colors.secondary.200'),
          borderColor: theme('colors.secondary.200'),
          color: theme('colors.white'),
        },
        '.btn-secondary:hover': {
          backgroundColor: theme('colors.secondary.300'),
          borderColor: theme('colors.secondary.300'),
        },
        '.btn-secondary:focus': {
          backgroundColor: theme('colors.secondary.400'),
          borderColor: theme('colors.secondary.400'),
        },
        '.btn-secondary[disabled]': {
          backgroundColor: theme('colors.secondary.100'),
          borderColor: theme('colors.secondary.100'),
        },
        '.btn-outline': {
          backgroundColor: theme('colors.transparent'),
          borderColor: theme('colors.green.200'),
          color: theme('colors.green.200'),
        },
        '.btn-outline:hover': {
          backgroundColor: theme('colors.green.200'),
          color: theme('colors.white'),
        },
        '.btn-outline:focus': {
          backgroundColor: theme('colors.green.300'),
          borderColor: theme('colors.green.300'),
          color: theme('colors.white'),
        },
        '.btn-outline[disabled]': {
          backgroundColor: theme('colors.gray.100'),
          borderColor: theme('colors.green.100'),
          color: theme('colors.green.100'),
        },
        '.btn-md': {
          borderRadius: theme('borderRadius.md'),
          padding: theme('spacing.2'),
          fontSize: theme('fontSize.base'),
        },
        '.btn-lg': {
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.4'),
          fontSize: theme('fontSize.md'),
        },
        '.link': {
          color: 'currentColor',
          textDecoration: 'underline',
        },
        '.link:hover': {
          color: theme('colors.primary.300'),
        },
        '.link:active': {
          color: theme('colors.primary.400'),
        },
        '.link:focus': {
          color: theme('colors.primary.400'),
        },
        '.icon': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
        },
      })
    })
  ],
}


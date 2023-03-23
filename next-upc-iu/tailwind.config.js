/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#BC8D4B',
        'primary-fill': '#b28442',
        'primary-dark': '#996E2D',
        'primary-darker': '#76500E',
        'custom-black': '#1A1915',
        'custom-gray': '#818181',
      },
      height: {
        'almost': 'calc(100vh - 176px - 2rem - 70px)',
      },
      boxShadow: {
        'custom-button': 'inset 0 0 0 3px #1A1915'
      },
      screens: {
        'xs': '480px'
      }
    },
  },
  plugins: [],
}

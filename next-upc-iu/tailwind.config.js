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
      minHeight: {
        'almostScreen': 'calc(100vh - 67px)',
      },
      boxShadow: {
        'xl-full': '0 0px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -4px rgb(0 0 0 / 0.1);'
      }
    },
  },
  plugins: [],
}

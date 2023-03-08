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
        'primary-dark': '#996E2D',
        'primary-darker': '#76500E',
      }
    },
  },
  plugins: [],
}

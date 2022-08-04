/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      arima: [ 'Arima Madurai', 'cursive'],
      quicksand: ['Quicksand', 'sans-serif'],
      Raleway: ['Raleway', 'sans-serif'],

    },
    extend: {
      colors: {
        'redfont': '#fc7b54',
        'bluebg':'rgba(128, 16, 197, 0.75)',
        'bluebgg':'rgba(4, 9, 30, 0.7)'
      },
    },
  },
  plugins: [],
}

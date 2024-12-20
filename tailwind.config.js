/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'c-primary': '#ABEF5F',
      'c-circle': '#07b278'

    },
    fontFamily: {
      'manrope': ["Manrope",]
    },

  },
  plugins: [
    require('daisyui'),
  ],
}
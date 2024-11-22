/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        'icon-sm': '0.2rem',
        'icon-lg': '2rem',
      },
      colors: {
        'forestGreen': '#014335',
        'lighterGreen': '#095749',
        'gradientGreen': '#026a47',
      }
    },
  },
  plugins: [],
}


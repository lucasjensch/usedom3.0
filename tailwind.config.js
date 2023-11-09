/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '425px',
    },
    extend: {
      backgroundImage: {
        'parallax': 'url("../src/assets/seebruecke-wallpaper.jpg")',
        'logo': 'url("../src/assets/logo.jpg")',
      }
    },
  },
  plugins: [],
}


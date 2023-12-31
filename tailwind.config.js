/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '387px',
      'xs': '425px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      backgroundImage: {
        'parallax': 'url("../src/assets/seebruecke-wallpaper.jpg")',
        'logo': 'url("../src/assets/logo.jpg")',
        'waves': 'url("../src/assets/waves.svg")',
        'wallpaper': 'url("../src/assets/water-wallpaper.jpeg")',
      }
    },
  },
  plugins: [],
}


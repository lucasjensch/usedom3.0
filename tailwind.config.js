/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      'xxs': '375px',
      'xs': '425px',
      'sm': '450px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      backgroundImage: {
        'parallax': 'url("../src/assets/seebruecke-wallpaper.jpg")',
        'logo': 'url("../src/assets/logo.jpg")',
        'waves': 'url("../src/assets/waves.svg")',
        'wallpaper': 'url("../src/assets/karlshagen.jpg")',
        'house': 'url("../src/assets/Haus_front.jpg")',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


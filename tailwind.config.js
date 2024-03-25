/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'pink': '#f089a1',
      'dkpink': '#8b374a',
      'ltgrey': '#dddede',
      'midgrey': '#a2a09f',
      'dkgrey': '#141d29',
      'ltblue': '#99c0df',
      'dkblue': '#17415b',
      'black': '#000000'
    },
    extend: {},
  },
  plugins: [],
}

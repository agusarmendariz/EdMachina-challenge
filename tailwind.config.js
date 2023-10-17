/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blueMachina: '#4436FD',
        defaultLink:'#7367F0',
        defaultText:'#6E6B7B',
       
      },
      fontFamily:{
        'montserrat':['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}


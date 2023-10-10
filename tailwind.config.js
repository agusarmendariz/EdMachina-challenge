/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      Colors: {
        'blue-Machina': '#4436FD',
        'default-link':'#7367F0',
        'default-text':'#6E6B7B',
       
      },
    },
  },
  plugins: [],
}


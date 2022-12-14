/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
      ],    
  theme: {
    extend: {
        spacing: {
          '112': '28rem',
          '120': '30rem',
        }
      }
  },
  plugins: [],
}

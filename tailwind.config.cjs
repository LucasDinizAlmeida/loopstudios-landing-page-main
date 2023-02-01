/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'josefin': ['Josefin Sans', 'sans-serif'],
      'alata': ['Alata', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'desktop-hero': "url('/images/desktop/image-hero.jpg')",
        'mobile-hero': "url('/images/mobile/image-hero.jpg')",
      },
      colors: {
        'white': '#ffffff',
        'greyCustom': {
          100: 'hsl(0, 0%, 98%)',
          400: 'hsl(0, 0%, 55%)',
          500: 'hsl(0, 0%, 41%)'
        },
      }
    },
  },
  plugins: [],
}
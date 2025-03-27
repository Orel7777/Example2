/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Heebo', 'sans-serif'],
      },
      colors: {
        mint: {
          50: '#f0faf5',
          100: '#d1f5e4',
          200: '#a3ebd0',
          300: '#6eddb5',
          400: '#3cc894',
          500: '#1ea979',
          600: '#108b63',
          700: '#0a6d4f',
          800: '#064e38',
          900: '#033024',
        },
        gold: {
          50: '#fdfaf5',
          100: '#faf0e5',
          200: '#f5e1c7',
          300: '#e9c38e',
          400: '#dea661',
          500: '#d28b3e',
          600: '#bc712b',
          700: '#995a22',
          800: '#76441b',
          900: '#573215',
        },
      },
    },
  },
  plugins: [],
};
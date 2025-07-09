/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  fontFamily: { sans: ['Outfit', 'sans-serif'] },
  animation: {
    'gradient-x': 'gradient-x 5s ease infinite', // Animação do gradiente
  },
  keyframes: {
    'gradient-x': {
      '0%, 100%': { 'background-position': '0% 50%' },
      '50%': { 'background-position': '100% 50%' },
    },
  },
},
  plugins: [],
  }
}
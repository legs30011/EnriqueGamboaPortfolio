/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b', // fondo oscuro
        secondary: '#facc15', // amarillo
        accent: '#3b82f6', // azul
        danger: '#ef4444', // rojo
        success: '#10b981', // verde
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      backgroundImage: {
        'pixel-art': "url('/public/pixelfont.webp')",
        'hero-pattern': "url('/public/pixelfont.webp')",
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0b0b0d',
          900: '#111113',
          850: '#161618',
          800: '#1d1d20',
          700: '#29292d',
        },
        gold: {
          300: '#ffe08a',
          400: '#ffd166',
          500: '#f6bd3f',
        },
      },
      boxShadow: {
        soft: '0 24px 70px rgba(0, 0, 0, 0.38)',
        glow: '0 0 0 1px rgba(255, 209, 102, 0.16), 0 18px 38px rgba(0, 0, 0, 0.28)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

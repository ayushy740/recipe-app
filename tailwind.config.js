/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f8ff',
          100: '#dff1ff',
          200: '#b9e1ff',
          300: '#86ccff',
          400: '#58b7ff',
          500: '#2ea1ff',
          600: '#1c82db',
          700: '#1867ae',
          800: '#154f85',
          900: '#133f69',
        },
      },
      boxShadow: {
        card: '0 10px 25px -10px rgba(16, 24, 40, 0.25)',
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}


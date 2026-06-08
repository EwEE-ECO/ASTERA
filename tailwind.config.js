/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        astera: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#ffffff',
          600: '#f5f5f5',
          700: '#e5e5e5',
          800: '#d4d4d4',
          900: '#a3a3a3',
        },
        night: {
          50: '#f6f6f7',
          100: '#e2e2e6',
          200: '#c5c5cd',
          300: '#a0a0ae',
          400: '#7d7d8e',
          500: '#636374',
          600: '#4e4e5c',
          700: '#40404b',
          800: '#36363f',
          900: '#1a1a20',
          950: '#0c0c10',
        },
      },

    },
  },
  plugins: [],
}

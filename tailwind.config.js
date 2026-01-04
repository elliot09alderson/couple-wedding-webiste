/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f9ebe5',
          200: '#f5d7cb',
          300: '#e8b4a0',
          400: '#d98b6b',
          500: '#c8694a',
          600: '#b5543b',
          700: '#974432',
          800: '#7c3a2d',
          900: '#663429',
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        gold: {
          50: '#fffdf7',
          100: '#fefaeb',
          200: '#fcf2cc',
          300: '#f9e8a3',
          400: '#f5d466',
          500: '#e9bc30',
          600: '#d19a1c',
          700: '#ad7618',
          800: '#8d5d1a',
          900: '#754c19',
        },
        sage: {
          50: '#f8faf6',
          100: '#eef3eb',
          200: '#dce7d5',
          300: '#bdd4b0',
          400: '#97ba84',
          500: '#74a060',
          600: '#5a834a',
          700: '#47683c',
          800: '#3b5533',
          900: '#31462b',
        },
        cream: '#faf7f4',
        ivory: '#fffff0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Cormorant Garamond', 'serif'],
        script: ['Great Vibes', 'cursive'],
        display: ['Italiana', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'sparkle': 'sparkle 2s linear infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'floral-pattern': "url('/images/floral-pattern.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D62828',
          blue: '#1A3A6B',
          orange: '#F4821F',
          yellow: '#FFD700',
          dark: '#0A1628',
          navy: '#0F2545',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'cursive'],
        oswald: ['Oswald', 'sans-serif'],
      },
      animation: {
        'gradient-move': 'gradientMove 3s linear infinite',
        'pulse-dot': 'pulseDot 1.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) forwards',
        'count-up': 'fadeUp 0.5s ease forwards',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0%' },
          '100%': { backgroundPosition: '200%' },
        },
        pulseDot: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(32px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    }
  },
  plugins: [],
}

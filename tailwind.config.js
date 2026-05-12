/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#F0BE6F',
        teal: '#1B4543',
        mint: '#B3D0C6',
        cream: '#FAF6EE',
        'cream-deep': '#F3ECDC',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(27,69,67,0.08)',
        glow: '0 0 0 1px rgba(27,69,67,0.08), 0 24px 60px rgba(27,69,67,0.12)',
      },
      screens: {
        xs: '400px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ringSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        ringSpin: 'ringSpin 40s linear infinite',
        pulseSoft: 'pulseSoft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

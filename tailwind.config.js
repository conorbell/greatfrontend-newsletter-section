/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-bottom': 'linear-gradient(to bottom, #f9fafb, #d2d6db)',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out forwards', // Customize the duration and timing function as needed
      },
    },
  },
  plugins: [],
};

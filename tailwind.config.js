/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      'tablet': '900px'
    },
    extend: {
      animation: {
        "fade-out": "fade-out 0.4s ease-in forwards",
      },
      keyframes: {
        "fade-out": {
          "100%": { opacity: 0, display: "none" },
        },
      },
    },
  },
  plugins: [],
}


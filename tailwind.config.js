/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'Arial', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'Arial', 'sans-serif'], // Correct font family name
        'montserrat': ['Montserrat', 'Arial', 'sans-serif'], // Adding Montserrat
      },
    },
  },
  plugins: [],
};

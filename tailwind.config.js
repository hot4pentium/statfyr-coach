/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: { 500: '#f97316', 600: '#ea580c' },
        blue: { 500: '#3b82f6', 600: '#2563eb' },
      },
    },
  },
  plugins: [],
}
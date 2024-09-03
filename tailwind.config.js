/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#8EB8E5",
        'secondary':"#7C99B4",
        'tertiary':"#6B7F82"
      }
    },
  },
  plugins: [],
}
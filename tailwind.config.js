/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-pink": "#DE5268",
        "brand-light-pink": "#F5DFDD",
        "brand-turquoise": "#5CC6C7",
      },
    },
  },
  plugins: [],
};

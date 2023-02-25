/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["HurmeGeometricSans", "sans-serif"],
        HurmeGeometricBold: ["HurmeGeometric", "sans-serif"],
      },
      backgroundImage:{
        Banner:"url('../public/assets/images/megabanner.jpeg')",
      },
    },
  },
  plugins: [],
};

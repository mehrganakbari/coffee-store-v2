/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'nav': "url('../assets/images/cropped-hero-1-1.jpg')",
        'hero': "url('../assets/images/cropped-img-5-1.jpg')",
        'footer': "url('../assets/images/cropped-img-9-1.jpg')",
      },
      screens: {
        'xs': '400px',
        'xs2': '515px',
        'sm': '568px',
        'md': '640px',
        'lg': '768px',
        'xl': '1024px',
        '2xl': '1280px',
        '3xl': '1536px',
      },
    },
  },
  plugins: [],
};

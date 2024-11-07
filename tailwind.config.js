
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      screens: {
        "xs": "420px",
      },
    },
  },
  plugins: [],
};

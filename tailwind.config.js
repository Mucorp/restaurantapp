/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#521293",
        blackish: "#271D34",
        redish: "#FF4D4F",
        greenish: "#01B81A",
      },
    },
  },
  plugins: [],
};

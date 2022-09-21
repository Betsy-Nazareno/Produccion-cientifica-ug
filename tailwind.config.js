/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{html,js}",
    "./src/pages/**.{html,js}",
    "./src/components/**/*.{html,js}",
    "./src/components/**.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#E9F6FF",
          special: "#F2FAFF",
          DEFAULT: "#0C3248",
          hover: "#0b4060",
          opaque: "#8698A4",
          hardlight: "#EFF7FC",
        },
        green: {
          DEFAULT: "#B4C751",
          dark: "#A4C22C",
        },
      },
    },
  },
  plugins: [],
};

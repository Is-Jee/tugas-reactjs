/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Light: "#FFF2D8",
        Dark: "#141E46",
        LightBlur: "#73907266",
        DarkBlur: "#2c402f66",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

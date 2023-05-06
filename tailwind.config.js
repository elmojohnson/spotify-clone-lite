/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16a34a",
        secondary: "#7c3aed",
        base: {
          100: "#26262C",
          200: "#1C1C21",
          300: "#131316"
        }
      },
    },
  },
  plugins: [],
};

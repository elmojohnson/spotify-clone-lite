/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16a34a",
        secondary: "#7c3aed",
        base: {
          100: "#1e293b",
          200: "#020617"
        }
      },
    },
  },
  plugins: [],
};

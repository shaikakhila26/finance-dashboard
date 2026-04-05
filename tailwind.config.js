/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkGreen: "#0A3323",
        mossGreen: "#839958",
        beige: "#F7E4D5",
        rosyBrown: "#D3968C",
        midnightGreen: "#105666",
      },
    },
  },
  plugins: [],
};


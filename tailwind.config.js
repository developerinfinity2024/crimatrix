/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c2536",
        white: "#ffffff",
        textDark: "#a2a6aa",
        textDarkBlue: "#0e1d44",
        active: "#d6fbe6",
        inactive: "#faeef0",
        activeDark: "#2aac95",
      },
    },
  },
  plugins: [],
};

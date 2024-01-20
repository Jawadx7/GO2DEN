/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSizes: {
        txtsm: "10px",
      },
      colors: {
        dark: "#251f2b",
        light: "#eeecec",
        container: "#2b2a2a",
        primary: "#e95d00",
        secondary: "#9a00e2",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include all files in the src folder
    "./public/**/*.html", // Include all HTML files in the public folder
  ],
  theme: {
    colors: {
      primary: "#FF5733",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};

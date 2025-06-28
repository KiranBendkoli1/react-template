/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include all files in the src folder
    "./public/**/*.html", // Include all HTML files in the public folder
  ],
  theme: {
   
    extend: {
      colors:{
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        bgPrimary:"var(--color-bg-primary)",
        tBase:"var(--color-text-base)"
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};

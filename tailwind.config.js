/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": "Plus Jakarta Sans",
        "inter": "Inter"
      },
      colors: {
        primaryBlack: "#26282C",
        primaryGray: "#787486",
        primaryBlue: "#0D062D",
        borderGray: "#EDF2F7",
        neutralGray: "#525252",
        secondaryGray: "#FAFAFA",
        primaryGreen: "#34CAA5",
        dangerRed: "#ED544E",
      }
    },
  },
  plugins: [],
}
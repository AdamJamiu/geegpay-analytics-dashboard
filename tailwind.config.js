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
        appBlack: "#22242C",
        appGrey: "#F5F5F5",
        appPurple: "#6160DC",
        appCyan: "#54C5EB",
        appOrange: "#FFB74A",
      }
    },
  },
  plugins: [],
}
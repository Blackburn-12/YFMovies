/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#efc01a",
        NavColor: "#EFEFEF",
        Dark:"#0F0F0F",
        CardColor: "#1C1B1B",
        Fontcolor: "#F0F0F0"

      },
      fontFamily:{
        Kanit: ['Kanit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
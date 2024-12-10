/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        nuni : ["Nunito", "sans-serif"],
        open : ["Open Sans", "sans-serif"],
        pops : ["Poppins", "sans-serif"]
      }
    },
    container: {
      center : true,
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
      },
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1320px',
      },
    },    
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
         500 : "#FEBD11" ,
          200 : "#FFFBF2",
        },
        
        
      },
      fontFamily: {
        myFont: ["Zilla Slab"],
      },
   
      screens: {

        "xs": {"min":"300px" , "max":"460px"},
   
       'md': '768px',
       'lg': '1024px',
       'xl': '1280px',
       '2xl': '1536px',
       
     },

    },
  },
  plugins: [  require('tailwind-scrollbar'),],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.vue" , "./src/components/card.vue"],
  theme: {
    extend: {},
    colors: {
      'background-color': '#1d3557',
      'container-color' : '#457b9d',
      'container-hover-color': '#a8dadc',
      'text-color' : '#f1faee',
      'accent-color' : '#e63946'
      
    },
  },
  plugins: [],
}

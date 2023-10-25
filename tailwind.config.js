/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    container: {
        padding: '5rem'
    },
    extend: {
      spacing: {
        'quarter':'25%'
      },
      fontFamily: {
        'sans': "'Work Sans', sans-serif"
      },
      colors: {
        'do-blue-dark': '#080c2d',
        'do-blue-medium': 'rgb(20, 86, 255)',
        'do-blue-mediumdark': '#1d274c',
        'do-blue-light': 'rgb(0, 105, 255)',
        'do-gray': 'rgb(214, 220, 234)'
      }
    },
  },
  plugins: [],
}

/* 

- Agregar espaciado personalizado

spacing: {
  // Creo una clase para el especiado donde al agregar quarter estamos referenciandolo con 25%.
  'quarter':'25%'
},


- Agregar fuente de texto
 
fontFamily: {
   'sans': 'sobreesribir fuente de texto',
   'cascadia': 'crear nueva fuente de texto'
}

- Agregar color

colors: {
  'incredible-blue': '#080c2d',
  'amazing-yellow': '#d5f618'
}

*/


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    container: {
        padding: '7rem'
    },
    extend: {
      spacing: {
        'quarter':'25%',
        '120': '30rem',
        '200': '45rem',
        '0.4': '0.090rem',
        '3.9/12': '32%'
      },
      fontFamily: {
        'sans': "'Work Sans', sans-serif",
        'epilogue': "'Epilogue', sans-serif",
        'jetbrain': "'JetBrains Mono', monospace",
        'inter': "'Inter', sans-serif"
      },
      colors: {
        'do-blue-dark': 'rgb(8, 27, 75)',
        'do-blue-medium': 'rgb(20, 86, 255)',
        'do-blue-mediumdark': 'rgb(0, 44, 155)',
        'do-blue-light': 'rgb(0, 105, 255)',
        'do-cyan': 'rgba(0, 255, 255, 0.5)',
        'do-gray': 'rgb(214, 220, 234)',
        'do-gray-card': '#4d5b7c',
        'do-gray-subtext': 'rgb(77, 91, 124)',
        'do-gray-o': 'rgba(214, 220, 234, 0.2)',
        'do-gray-oh': 'rgba(214, 220, 234, 0.5)',
        'do-blue-bhover': 'rgb(0, 36, 124)',
        'do-purple': 'rgb(48, 0, 145)',
        'do-reviews': 'rgba(200, 223, 255, 0.5)'
      },
      backgroundImage: {
        'main-image': "url('https://www.digitalocean.com/_next/static/media/floating-console-home-desktop-background.33702df4.svg')",
        'new-banner': "url('https://www.digitalocean.com/_next/static/media/do-gtm-cta-text-desktop.49ae262a.svg')"
      },
      borderRadius: {
        'main': '5rem'
      },
      width: {
        '9.5/12': '79%',
        '5.5/12': '45%'
      },
      height: {
        '88': '22rem'
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


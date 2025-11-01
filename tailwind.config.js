// tailwind.config.js
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      // ADICIONE/ATUALIZE ESTA SEÇÃO
      typography: ({ theme }) => ({
        lg: {
          css: {
            // Títulos principais (h1)
            'h1': {
              fontWeight: '700', // Negrito
              fontSize: theme('fontSize.4xl'), // Maior
            },
            // Subtítulos (h2)
            'h2': {
              fontWeight: '600', // Semi-negrito
              fontSize: theme('fontSize.2xl'), // Maior que o padrão
              marginTop: '1.8em',
              marginBottom: '0.8em',
            },
          },
        },
      }),
    },
  },
  plugins: [
    typography, // Use a variável importada
  ],
}
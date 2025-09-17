/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
       fontFamily: {
         sans: ['Montserrat', 'sans-serif', 'Helvetica Neue', 'Helvetica', 'arial'],
    titleFont: ['Macondo', 'cursive'],    },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')
,require('@tailwindcss/typography')
],
};

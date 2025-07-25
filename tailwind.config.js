/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{html,js}'],
   theme: {
      extend: {
         fontFamily: {
            Cardo: ['Cardo', 'serif'],
         },
      },
      screens: {
         '2xl': { max: '1535px' },
         xl: { max: '1279px' },
         lg: { max: '1023px' },
         md: { max: '767px' },
         sm: { max: '639px' },
      },
   },
   plugins: [],
   darkMode: 'selector',
   mode: 'jit',
};

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#e1e2a4',
        ltGreen: '#eeefc1',
        galleryButton: '#0061af',
        testimonials: '#EDF1F4',
        medCareYellow: '#ffd57d',
        'warm-gray': colors.stone,
      },
    },
    screens: {
      xxs: '320px',
      xs: '367px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require('flowbite/plugin'), require('tw-elements/dist/plugin')],
};

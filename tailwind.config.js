/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#0f051d',
      dark: '#1D2144',
      button: '#b7b4bb',
      modal: '#20162d',
      primary: '#1ED760',
      secondary: '#3754FB',
      third: '#FC01FF',
      yellow: '#FBB040',
      'body-color': '#959CB1',
      warning: '#C8A21B',
      error: '#C81B1B',
    },
    screens: {
      xs: '450px',
      // => @media (min-width: 450px) { ... }

      sm: '575px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        clashDisplayRegular: ['var(--clashDisplayRegular)'],
        clashDisplayBold: ['var(--clashDisplayBold)'],
        poppinsRegular: ['var(--poppinsRegular)'],
        poppinsBold: ['var(--poppinsBold)'],
      },
    },
  },
  plugins: [],
};

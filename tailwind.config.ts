// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: '#2C3E50',
        medium: '#34495E',
        light: '#7F8C8D',
        soft: '#BDC3C7',
        bright: '#ECF0F1'
      },
      fontFamily: {
        main: ['Poppins', 'Inter', 'Roboto', 'sans-serif']
      },
      borderRadius: {
        xl: '8px'
      },
      transitionTimingFunction: {
        smooth: 'ease-in-out'
      }
    },
  },
  plugins: [],
}

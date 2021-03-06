module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",

  ],
  theme: {
    fontFamily: {
      'sans': ['Gilroy', 'sans-serif']
    },
    extend: {
      gridTemplateRows: {
        '7': 'repeat(7,minmax(0,1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
      },
      colors: {
        gradientA: '#72A2AF',
        gradientB: '#4A7889'
      }
    },
  },
  plugins: [],
}

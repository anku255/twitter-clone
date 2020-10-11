module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'pearl': '#15202B',
        'border': '#3d5466',
        'blue-500': 'rgb(29, 161, 242)',
        'primary-text': '#8899A6'
      },
      fontSize: {
        base: ['0.9375rem', '1.5'],
      },
    },
  },
  variants: {},
  plugins: [],
}

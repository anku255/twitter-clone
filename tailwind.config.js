module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'accent-2': '#253341',
        'pearl': '#15202B',
        'border': '#3d5466',
        'blue-500': 'rgb(29, 161, 242)',
        'primary-text': '#8899A6',
        'overlay': 'rgba(0, 0, 0, 0.3)',
      },
      fontSize: {
        base: ['0.9375rem', '1.5'],
        tiny: ['0.833rem', '1.5']
      },
      spacing: {
        '3': '0.625rem',
        '4': '0.9375rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '17': '4.25rem'
      },
    },
  },
  variants: {},
  plugins: [],
}

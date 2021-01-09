module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#0CF5A4',
        'secondary': '#F2C834',
        'terceary': '#060F1E',
        'tercelight': '#123160',
        'quaternary': '#a950bc',
        'quinte': '#77fc6d',
        'clara': '#e5e5e5',
        'brilho': '#77fc6d',
      },
      fontFamily: {
        body: ['Nunito']
      },
      fontWeight: {
        'extrafina': '200',
        'fina': '300',
        'norm': '400',
        'semi': '800',
        'gorda': '700',
        'preta': '800',
        'extreme': '900',
      },
      fontSize: {
        xs: ['0.65rem', { lineHeight: '0.8rem' }],
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
       '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 3px 5px 0 rgba(0, 0, 0, 12)',
        none: 'none',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

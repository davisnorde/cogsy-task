module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        'default': '5px',
      },
      colors: {
        'primary': '#1254ff',
        'secondary': '#aacbff',
        'support': '#d2d7df',
        'dark': '#2a2941',
      },
      fontFamily: {
        'display': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

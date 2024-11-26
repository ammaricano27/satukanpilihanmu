/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}', './index.html', './profil/index.html'],
  theme: {
    extend: {
        colors: {
            primary: "#242F9B",
            gradient: "#646FD4",
            dark: "#111827",
        }
    },
  },
  plugins: [],
}

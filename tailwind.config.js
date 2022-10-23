/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/*.{php,js,html}"],
  theme: {
    extend: {
      colors: {
        'dark': '#181818',
        'blue-dark': '#323645',
        'soft': '#1E1E1E',
      },
      boxShadow: {
        bounce: '27px 27px 54px #0b0b0b, -27px -27px 54px #252525',
        hit: 'inset 8px 8px 16px #101010, inset -8px -8px 16px #202020',
        whitebounce: '11px 11px 22px #181818, -5px -5px 22px #181818',
        whitehit: 'inset 11px 11px 22px #d1d1d1, inset -11px -11px 22px #ffffff',
        smallb: "15px 15px 30px #101010, -15px -15px 30px #202020;",
        smallh: "  inset 15px 15px 30px #101010, inset -15px -15px 30px #202020;"
      }
    },
  },
  plugins: [],
}
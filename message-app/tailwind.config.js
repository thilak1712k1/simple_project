/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [     
    // tailwindcss: {},
    // autoprefixer: {},
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwind-scrollbar'),

  ],
}


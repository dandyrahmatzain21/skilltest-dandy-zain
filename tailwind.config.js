/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      yellow: "#EBBA4A",
      orange: "#E8A03E",
      lightblue: "#5AC6FA",
      darkblue: "#459CE3",
      red: "#E3634D",
      white: "#FFFFFF"
    },
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
      },
      opacity: {
        '77': '.33'
      }
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          secondary: "white",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
}
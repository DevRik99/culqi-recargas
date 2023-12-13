/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      "colors": {
        "main": "#141414",
        "aqua": "#47bab6"
      }
    },
  },
  plugins: [require("daisyui")],
  // darkMode: "class",
  // daisyui: {
  //   themes: [
  //     "light",
  //   ],
  // }
}


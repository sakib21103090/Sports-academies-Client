/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
      ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary-color": "black",
        },
      },
      {
        dark: {
      ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary-color": "white",
        },
      },
    ],
  },
}


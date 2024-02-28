import forms from "@tailwindcss/forms"
import typography from "@tailwindcss/typography"
import defaultTheme from "tailwindcss/defaultTheme"
import flowbitePlugin from "flowbite/plugin"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#ffffff",
        secondaryBg: "#fafafa",
        primaryDark: "#111",
        text: "#cfcfcf",
      },
      fontFamily: {
        sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography, forms, flowbitePlugin],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customDark: "#0D1219",
        customLight: "#FBFBFD",
        sidebarCustom: "#1A212B",
        HighlightMenu: "#2E353F",
      },
      fontFamily: {
        roboto: ["roboto", "sans"],
      },
    },
  },
  plugins: [],
};

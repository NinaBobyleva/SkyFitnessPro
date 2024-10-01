/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        main: '1440px',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif']
      },
      colors: {
        background: "#FAFAFA",
        black: "#000000",
        white: "#FFFFFF",
        red: "#DB0030",
        lime: "#BCEC30",
        limeHover: "#C6FF00",
        yellow: "#FFC700",
        orange: "#F7A012",
        salmon: "#FF7E65",
        purple: "#7D458C",
        blueDark: "#2491D2",
        blueLight: "#00C1FF",
        gray: "#D0CECE",
        grayLight: "#F7F7F7",
        selectionBorder: "#C4C4C4",
      },
      cursor: {
        'custom': 'url(/img/customCursor.svg), pointer',
      },
      boxShadow: {
        def: '0 4px 67px -12px rgba(0, 0, 0, 0.13)',
      },
    },
  },
  plugins: [],
}


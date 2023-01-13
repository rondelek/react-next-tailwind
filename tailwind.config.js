/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./sections/**/*.{html,js,jsx}",
    "./styles/**/*.{js,jsx}",
  ],
  mode: "jit",
  theme: {
    colors: {
      teal: "#0E8784",
      tealHover: "#66D2CF",
      gray: "rgb(199, 191, 190)",
      darkBlue: "#333D4B",
      white: "#FEFCF7",
      cream: "#fdd5ba",
    },
    extend: {
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
      backgroundImage: {
        "hero-lg": "url('/image-hero-lg.jpg')",
        "hero-md": "url('/image-hero-md.jpg')",
        "hero-sm": "url('/image-hero-sm.jpg')",
      },
    },
  },
  plugins: [],
};

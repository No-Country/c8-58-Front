/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "fondo": "#011631",
      "black": "#000000",
      "white": "#FFFFFF",
      "lila": "rgba(126, 122, 172, 0.9)",
      "gradiante1": "#0c1a43",
      "gradiante2": "#3b1993",
      "gradiante3": "#7b1dfd",
      "gradiante4": "#824ACF",
      "gray": "#D9D9D9",
      "lineaNavbar": "#011631",
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
  ],
}

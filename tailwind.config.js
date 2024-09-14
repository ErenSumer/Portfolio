/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "blue-opaque": "rgb(13 42 148 / 18%)",
      },
      backgroundColor: {
        main: "#0f172a",
      },
    },
  },
  plugins: [import("@tailwindcss/typography")],
};

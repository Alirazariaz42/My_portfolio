/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        borderMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
  animation: {
    "text-gradient": "text-gradient 1.5s linear infinite",
    borderMove: "borderMove 3s linear infinite",
  },
  keyframes: {
    "text-gradient": {
      to: {
        backgroundPosition: "200% center",
      },
    },
  },
};

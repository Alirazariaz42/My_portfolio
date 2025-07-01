/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  animation: {
    "text-gradient": "text-gradient 1.5s linear infinite",
  },
  keyframes: {
    "text-gradient": {
      to: {
        backgroundPosition: "200% center",
      },
    },
  },
};

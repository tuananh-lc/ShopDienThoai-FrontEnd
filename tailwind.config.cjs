/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}", "index.html"],
  theme: {
    extend: {
      colors: {
        pkBlue: "rgba(0, 176, 215, 1)",
        colorText: "rgba(95, 94, 97, 1)",
        border: "background: rgba(0, 176, 215, 1)",
        active: "#fff",
        linner: "linear-gradient(90deg,#dd5e89,#f7bb97)",
      },
    },
  },
  plugins: [],
};

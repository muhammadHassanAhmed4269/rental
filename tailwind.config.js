/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-box":
          "linear-gradient(145deg, rgba(244, 244, 244, 0.40) -4.23%, rgba(244, 244, 244, 0.20) 102.58%, rgba(244, 244, 244, 0.20) 102.58%)",
      }),
    },
  },
  plugins: [],
};

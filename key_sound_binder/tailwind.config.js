/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#89edc5",

          secondary: "#ed40ea",

          accent: "#5561b5",

          neutral: "#342037",

          "base-100": "#372753",

          info: "#3a6ccb",

          success: "#66e1d6",

          warning: "#f3b72b",

          error: "#eb7e7a",
        },
      },
    ],
  },
};

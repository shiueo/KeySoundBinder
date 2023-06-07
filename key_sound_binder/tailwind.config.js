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
          primary: "#ff0a54",

          secondary: "#e1e1e1",

          accent: "#ff0a54",

          neutral: "#342037",

          "base-100": "#050505",

          info: "#3a6ccb",

          success: "#66e1d6",

          warning: "#f3b72b",

          error: "#eb7e7a",
        },
      },
    ],
  },
};

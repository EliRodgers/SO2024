/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      nova: ["proxima-nova", "sans-serif"],
      novawide: ["proxima-nova-extra-wide", "sans-serif"],
      // font-family: proxima-nova, sans-serif;
      // font-style: normal;
      // font-weight: 400;
    },
    extend: {
      colors: {
        "darkest-blue": "#003B5C",
        "darker-blue": "#005587",
        "lighter-blue": "#8BB8E8",
        "lightest-blue": "#DAEBFE",
      },
    },
  },
  plugins: [],
};

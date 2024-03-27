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
      grotesk: ["niveau-grotesk", "sans-serif"],
      grotesksc: ["niveau-grotesk-small-caps", "sans-serif"],
    },
    extend: {
      scrollMargin: {
        96: "12rem",
      },
      colors: {
        "darkest-blue": "#021824",
        "dark-blue": "#003B5C",
        "darker-blue": "#005587",
        "lighter-blue": "#8BB8E8",
        "lightest-blue": "#DAEBFE",
        gold: "#FFD100",
      },
      borderWidth: {
        2: "2px",
      },
      container: {
        center: true,
      },

      animation: {
        fade: "fadeIn .5s ease-in-out",
      },

      backgroundImage: {
        swirl: "url('/images/sitebackground.png')",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

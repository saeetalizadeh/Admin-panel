/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(99 99 99) white",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#802348",
            borderRadius: "20px",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

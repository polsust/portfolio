module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#69aefc",
          lighter: "hsl(212, 96%, 86%)",
        },
        secondary: {
          normal: "#111827",
        },
      },
      keyframes: {
        lightBounce: {
          "0%": {
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "100%": {
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "bounce-light": "lightBounce 3s infinite",
      },
      boxShadow: {
        innerXl: `
            var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            --tw-shadow: inset 0px 8px 5px rgba(0, 0, 0, 0.06);
            background-color: rgba(0, 0, 0, 0.06)
        `,
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
        9: "9px",
        10: "10px",
        20: "20px",
      },
      scale: {
        1: "0.1",
      },
    },
    variants: {},
    plugins: [],
  },
};

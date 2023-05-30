/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#BC8D4B",
                "primary-fill": "#b28442",
                "primary-dark": "#996E2D",
                "primary-darker": "#76500E",
                "custom-black": "#1A1915",
                "custom-gray": "#818181",
                "primary-hover": "#D6A96B",
                "filter-color": "#A06F2C",
                "custom-gray2": "#BABABA",
                "hover-gray": "#F0F0F0",
            },
            minHeight: {
                almostScreen: "calc(100vh - 67px - 152px)",
            },
            boxShadow: {
                "custom-button": "inset 0 0 0 3px #1A1915",
                "custom-button-white": "inset 0 0 0 3px #fff",
                "xl-full":
                    "0 0px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -4px rgb(0 0 0 / 0.1)",
            },
            screens: {
                xs: "480px",
            },
        },
    },
    plugins: [],
};

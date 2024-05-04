/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                oracle: {
                    50: "#f3faf9",
                    100: "#d8efed",
                    200: "#b2dddb",
                    300: "#83c5c5",
                    400: "#59a6a8",
                    500: "#3f8a8d",
                    600: "#337276",
                    700: "#2a585b",
                    800: "#25484a",
                    900: "#233b3e",
                    950: "#0f2224",
                },
            },
        },
    },
    plugins: [],
};

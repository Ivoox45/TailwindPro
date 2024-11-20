module.exports = {
    content: ["./**/*.html"],
    theme: {
        extend: {
            keyframes: {
                scroll: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
            animation: {
                scroll: "scroll 15s linear infinite",
            },
        },
    },
    plugins: [],
};

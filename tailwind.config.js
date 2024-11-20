module.exports = {
    content: ["./**/*.html"],
    safelist: ["modal-enter", "modal-exit"],
    theme: {
        extend: {
            keyframes: {
                // Animación de scroll
                scroll: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                // Animaciones de progreso horizontal
                progress: {
                    "0%": { width: "0%" },
                    "50%": { width: "100%" },
                    "100%": { width: "0%" },
                },
                // Animaciones de progreso vertical
                progressVertical: {
                    "0%": { height: "0%" },
                    "50%": { height: "100%" },
                    "100%": { height: "0%" },
                },
                // Animación de progreso circular
                circleProgress: {
                    "0%": { strokeDashoffset: "94" },
                    "50%": { strokeDashoffset: "47" },
                    "100%": { strokeDashoffset: "94" },
                },
                // Animación escalonada
                staggered: {
                    "0%": { width: "0%" },
                    "100%": { width: "100%" },
                },
                // Animación de pulsación
                pulsate: {
                    "0%, 100%": { opacity: "0.5" },
                    "50%": { opacity: "1" },
                },
                // Animación de entrada del modal
                modalEnter: {
                    "0%": { opacity: "0", transform: "translateY(-10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                // Animación de salida del modal
                modalExit: {
                    "0%": { opacity: "1", transform: "translateY(0)" },
                    "100%": { opacity: "0", transform: "translateY(-10px)" },
                },
                // Animación de desvanecimiento (entrada)
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                // Animación de desvanecimiento (salida)
                fadeOut: {
                    "0%": { opacity: "1", transform: "translateY(0)" },
                    "100%": { opacity: "0", transform: "translateY(20px)" },
                },
            },
            animation: {
                // Animaciones generales
                scroll: "scroll 20s linear infinite",
                progress: "progress 3s ease-in-out infinite alternate",
                "progress-vertical":
                    "progressVertical 3s ease-in-out infinite alternate",
                "circle-progress":
                    "circleProgress 3s ease-in-out infinite alternate",
                staggered: "staggered 2s ease-in-out infinite",
                pulsate: "pulsate 1.5s ease-in-out infinite",
                // Animaciones de modales
                "modal-enter": "modalEnter 0.3s ease-out forwards",
                "modal-exit": "modalExit 0.3s ease-in forwards",
                // Animaciones de desvanecimiento
                "fade-in": "fadeIn 0.5s ease-in-out",
                "fade-out": "fadeOut 0.5s ease-in-out",
            },
        },
    },
    plugins: [],
};

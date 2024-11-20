module.exports = {
    content: ["./**/*.html"], // Ajusta la ruta según la ubicación de tus archivos HTML
    safelist: ["modal-enter", "modal-exit"], // Clases que necesitas preservar, como las de modales
    theme: {
        extend: {
            // Puedes mantener aquí cualquier otra personalización que desees
        },
    },
    plugins: [],
};

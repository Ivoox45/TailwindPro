document.addEventListener("DOMContentLoaded", () => {
    const openModal = (modal) => {
        if (modal) {
            modal.classList.remove("hidden");
            modal.classList.add("flex");
        }
    };

    const closeModal = (modal) => {
        if (modal) {
            modal.classList.remove("flex");
            modal.classList.add("hidden");
        }
    };

    // Botones para abrir modales
    const modalTriggers = {
        openBasicModal: "basicModal",
        openSuccessModal: "successModal",
        openErrorModal: "errorModal",
    };

    Object.entries(modalTriggers).forEach(([triggerId, modalId]) => {
        const trigger = document.getElementById(triggerId);
        if (trigger) {
            trigger.addEventListener("click", () => {
                const modal = document.getElementById(modalId);
                openModal(modal);
            });
        }
    });

    // Botones para cerrar modales
    document.querySelectorAll("[id^='close']").forEach((button) => {
        button.addEventListener("click", () => {
            const modal = button.closest(".fixed");
            closeModal(modal);
        });
    });
    // Carousel Functionality
    const carouselItems = document.getElementById("carouselItems");
    if (carouselItems) {
        const totalSlides = carouselItems.children.length;
        let currentSlide = 0;

        const updateCarousel = () => {
            carouselItems.style.transform = `translateX(-${
                currentSlide * 100
            }%)`;
        };

        document.getElementById("prevSlide").addEventListener("click", () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });

        document.getElementById("nextSlide").addEventListener("click", () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        });
    }

    // Typography Carousel Pause on Hover
    const carouselTypography = document.getElementById("carouselTypography");
    if (carouselTypography) {
        carouselTypography.addEventListener("mouseenter", () => {
            carouselTypography.style.animationPlayState = "paused";
        });
        carouselTypography.addEventListener("mouseleave", () => {
            carouselTypography.style.animationPlayState = "running";
        });
    }

    // Toast Notifications
    const showToast = (toastId) => {
        const toast = document.getElementById(toastId);
        if (toast) {
            toast.classList.remove("hidden");
            toast.classList.add("fade-in");
            setTimeout(() => {
                toast.classList.add("hidden");
                toast.classList.remove("fade-in");
            }, 3000);
        }
    };

    const toastButtons = {
        showBasicToast: "basicToast",
        showSuccessToast: "successToast",
        showErrorToast: "errorToast",
        showWarningToast: "warningToast",
        showAnimatedToast: "animatedToast",
    };

    Object.entries(toastButtons).forEach(([buttonId, toastId]) => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener("click", () => showToast(toastId));
        }
    });

    // Table Filter
    const searchTable = document.getElementById("searchTable");
    if (searchTable) {
        const tableBody = document.getElementById("tableBody");
        searchTable.addEventListener("input", (e) => {
            const filter = e.target.value.toLowerCase();
            Array.from(tableBody.rows).forEach((row) => {
                row.style.display = row.textContent
                    .toLowerCase()
                    .includes(filter)
                    ? ""
                    : "none";
            });
        });
    }

    // Accordion Functionality
    document.querySelectorAll("[data-accordion-toggle]").forEach((button) => {
        button.addEventListener("click", () => {
            const accordionContent = document.getElementById(
                button.dataset.accordionToggle
            );
            accordionContent.classList.toggle("hidden");
        });
    });
    // Framework Carousel Functionality
    const frameworkCarouselItems = document.getElementById(
        "frameworkCarouselItems"
    );
    if (frameworkCarouselItems) {
        const totalFrameworkSlides = frameworkCarouselItems.children.length;
        let currentFrameworkSlide = 0;

        const updateFrameworkCarousel = () => {
            frameworkCarouselItems.style.transform = `translateX(-${
                currentFrameworkSlide * 100
            }%)`;
        };

        document
            .getElementById("prevFrameworkSlide")
            .addEventListener("click", () => {
                currentFrameworkSlide =
                    (currentFrameworkSlide - 1 + totalFrameworkSlides) %
                    totalFrameworkSlides;
                updateFrameworkCarousel();
            });

        document
            .getElementById("nextFrameworkSlide")
            .addEventListener("click", () => {
                currentFrameworkSlide =
                    (currentFrameworkSlide + 1) % totalFrameworkSlides;
                updateFrameworkCarousel();
            });

        // Initialize the framework carousel
        updateFrameworkCarousel();
    }
});

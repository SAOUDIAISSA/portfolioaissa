document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuContainer = document.querySelector(".menu-container");
    const menuClose = document.querySelector(".menu-close");
    const overlay = document.querySelector(".overlay");

    // Ouvrir le menu
    menuToggle.addEventListener("click", () => {
        menuContainer.classList.add("open");
        overlay.classList.add("active");
    });

    // Fermer le menu
    menuClose.addEventListener("click", () => {
        menuContainer.classList.remove("open");
        overlay.classList.remove("active");
    });

    // Fermer le menu en cliquant sur l'overlay
    overlay.addEventListener("click", () => {
        menuContainer.classList.remove("open");
        overlay.classList.remove("active");
    });
});

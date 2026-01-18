document.addEventListener("DOMContentLoaded", () => {
    const menuBurger = document.getElementById("menu-burger");
    const modalMenu = document.getElementById("modal-menu");
    const closeBtn = document.getElementById("closeBtn");
    const modalContent = modalMenu?.querySelector(".modal-content");

    if (!menuBurger || !modalMenu || !closeBtn || !modalContent) return;

    menuBurger.setAttribute("aria-expanded", "false");
    modalMenu.setAttribute("aria-hidden", "true");

    const closeMenu = () => {
        modalMenu.classList.remove("visible");
        menuBurger.setAttribute("aria-expanded", "false");
        modalMenu.setAttribute("aria-hidden", "true");
        menuBurger.focus();
    };

    menuBurger.addEventListener("click", () => {
        modalMenu.classList.add("visible");
        menuBurger.setAttribute("aria-expanded", "true");
        modalMenu.setAttribute("aria-hidden", "false");
        closeBtn.focus(); 
    });


    closeBtn.addEventListener("click", closeMenu);

    modalMenu.addEventListener("click", closeMenu);

    modalContent.addEventListener("click", (e) => e.stopPropagation());
    // new : la fermeture avec bouton echap !
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalMenu.classList.contains("visible")) {
        closeMenu();
        }
    });
});

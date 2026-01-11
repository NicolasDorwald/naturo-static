document.addEventListener("DOMContentLoaded", () => {
    const menuBurger = document.getElementById("menu-burger");
    const modalMenu = document.getElementById("modal-menu");
    const closeBtn = document.getElementById("closeBtn");
    const modalContent = modalMenu?.querySelector(".modal-content");

    if (!menuBurger || !modalMenu || !closeBtn || !modalContent) return;

    // initialiser aria
    menuBurger.setAttribute("aria-expanded", "false");
    modalMenu.setAttribute("aria-hidden", "true");

    // fonction pour fermer le menu
    const closeMenu = () => {
        modalMenu.classList.remove("visible");
        menuBurger.setAttribute("aria-expanded", "false");
        modalMenu.setAttribute("aria-hidden", "true");
        menuBurger.focus(); // remettre le focus sur le bouton burger
    };

    // ouvrir menu
    menuBurger.addEventListener("click", () => {
        modalMenu.classList.add("visible");
        menuBurger.setAttribute("aria-expanded", "true");
        modalMenu.setAttribute("aria-hidden", "false");
        closeBtn.focus(); // focus sur le bouton fermer
    });

    // fermer menu avec croix
    closeBtn.addEventListener("click", closeMenu);

    // fermer avec clic sur overlay
    modalMenu.addEventListener("click", closeMenu);

    // stopper propagation dans le contenu
    modalContent.addEventListener("click", (e) => e.stopPropagation());

    // fermeture avec Esc
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalMenu.classList.contains("visible")) {
        closeMenu();
        }
    });
});

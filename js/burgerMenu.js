function initBurgerMenu() {
  const menuBurger = document.getElementById("menu-burger");
  const modalMenu = document.getElementById("modal-menu");
  const closeBtn = document.getElementById("closeBtn");
  const modalContent = modalMenu.querySelector(".modal-content");

  if (!menuBurger || !modalMenu || !closeBtn || !modalContent) return;

  // ouvrir
  menuBurger.addEventListener("click", () => {
    modalMenu.classList.add("visible");
  });

  // fermer avec croix
  closeBtn.addEventListener("click", () => {
    modalMenu.classList.remove("visible");
  });

  // fermer avec clic sur overlay
  modalMenu.addEventListener("click", () => {
    modalMenu.classList.remove("visible");
  });

  // stopper propagation dans le contenu
  modalContent.addEventListener("click", (e) => e.stopPropagation());

  // fermeture avec Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modalMenu.classList.remove("visible");
    }
  });
}

document.addEventListener("DOMContentLoaded", initBurgerMenu);
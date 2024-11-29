document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".toggle"); // Botón que abre el menú
  const showcase = document.querySelector(".showcase"); // Menú principal
  const overlay = document.querySelector(".overlay"); // Superposición (fondo oscuro)
  const menuLinks = document.querySelectorAll(".menu ul li a"); // Enlaces del menú

  function closeMenu() {
    menuToggle.classList.remove("active");
    showcase.classList.remove("active");
    overlay.style.display = "none"; // Oculta el overlay
  }

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    showcase.classList.toggle("active");
    overlay.style.display = showcase.classList.contains("active")
      ? "block"
      : "none";
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  overlay.addEventListener("click", closeMenu);
});

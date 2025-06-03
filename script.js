// Interactividad básica para el menú hamburguesa y scroll suave
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-list");

  navToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
  });

  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))?.scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Muestra alertas simuladas al hacer clic en botones
  document.querySelectorAll(".btn-reserva, .btn-main, .btn-alt").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("¡Gracias por elegirnos! Tu cita está en camino.");
    });
  });
});

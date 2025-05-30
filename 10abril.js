document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const imagenGrande = document.getElementById("imagen-grande");
  const caption = document.getElementById("caption");
  const cerrar = document.getElementById("cerrar");

  // Añadir evento click a cada miniatura
  document.querySelectorAll(".thumbnail").forEach(img => {
    img.addEventListener("click", () => {
      imagenGrande.src = img.src;
      imagenGrande.alt = img.alt;
      caption.textContent = img.alt;
      modal.style.display = "block";
    });
  });

  // Cerrar modal al pulsar el botón
  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
    imagenGrande.src = "";
    caption.textContent = "";
  });

  // Cerrar modal si se hace click fuera de la imagen
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      imagenGrande.src = "";
      caption.textContent = "";
    }
  });
});

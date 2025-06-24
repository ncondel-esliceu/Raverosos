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
// Dentro del evento click para mostrar la imagen grande
img.addEventListener("click", () => {
  imagenGrande.src = img.src;
  imagenGrande.alt = img.alt;
  caption.textContent = img.alt;

  // Ajustar tamaño máximo para móviles
  if (window.innerWidth <= 480) {
    imagenGrande.style.maxWidth = "95%";
    imagenGrande.style.maxHeight = "60vh";
  } else {
    imagenGrande.style.maxWidth = "90%";
    imagenGrande.style.maxHeight = "80vh";
  }

  modal.style.display = "block";
});

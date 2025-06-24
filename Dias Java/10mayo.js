document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const contenidoModal = document.getElementById("contenido-modal");
  const caption = document.getElementById("caption");
  const cerrar = document.getElementById("cerrar");

  document.querySelectorAll(".thumbnail").forEach(elemento => {
    elemento.addEventListener("click", () => {
      const src = elemento.src;
      const alt = elemento.alt;

      contenidoModal.innerHTML = "";

      if (src.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.src = src;
        video.controls = true;
        video.autoplay = true;
        video.style.maxWidth = "90%";
        video.style.maxHeight = "80vh";
        video.style.borderRadius = "8px";
        contenidoModal.appendChild(video);
      } else {
        const imagen = document.createElement("img");
        imagen.src = src;
        imagen.alt = alt;
        imagen.style.maxWidth = "90%";
        imagen.style.maxHeight = "80vh";
        imagen.style.borderRadius = "8px";
        contenidoModal.appendChild(imagen);
      }

      caption.textContent = alt;
      modal.style.display = "block";
    });
  });

  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
    contenidoModal.innerHTML = "";
    caption.textContent = "";
  });

  // Cerrar si se hace clic fuera del contenido (imagen o video)
  modal.addEventListener("click", (e) => {
    if (!document.getElementById("contenido-modal").contains(e.target)) {
      modal.style.display = "none";
      contenidoModal.innerHTML = "";
      caption.textContent = "";
    }
  });
});

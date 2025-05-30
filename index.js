document.addEventListener("DOMContentLoaded", () => {
  const mesAnio = document.getElementById("mes-anio");
  const tbody = document.querySelector("#calendario tbody");
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  let fechaActual = new Date();
  let mes = fechaActual.getMonth();
  let año = fechaActual.getFullYear();

  function generarCalendario(mes, año) {
    mesAnio.textContent = `${String(mes + 1).padStart(2, "0")} - ${meses[mes]} ${año}`;
    tbody.innerHTML = "";

    const primerDia = new Date(año, mes, 1).getDay();
    const totalDias = new Date(año, mes + 1, 0).getDate();

    let fila = document.createElement("tr");

    // Celdas vacías antes del primer día del mes
    for (let i = 0; i < primerDia; i++) {
      fila.appendChild(document.createElement("td"));
    }

    // Agregar los días del mes
    for (let dia = 1; dia <= totalDias; dia++) {
      const celda = document.createElement("td");
      celda.textContent = dia;
      celda.classList.add("fecha");

      // Solo para el día 10 de abril (mes == 3)
      if (mes === 3 && dia === 10) {
        celda.style.cursor = "pointer";
        celda.addEventListener("click", () => {
          // Abrir la página local 10abril.html en la misma ventana
          window.location.href = "10abril.html";
        });
      }

      fila.appendChild(celda);

      if (fila.children.length === 7) {
        tbody.appendChild(fila);
        fila = document.createElement("tr");
      }
    }

    // Completar la última fila con celdas vacías
    if (fila.children.length > 0) {
      while (fila.children.length < 7) {
        fila.appendChild(document.createElement("td"));
      }
      tbody.appendChild(fila);
    }
  }

  document.getElementById("prev").addEventListener("click", () => {
    mes--;
    if (mes < 0) {
      mes = 11;
      año--;
    }
    generarCalendario(mes, año);
  });

  document.getElementById("next").addEventListener("click", () => {
    mes++;
    if (mes > 11) {
      mes = 0;
      año++;
    }
    generarCalendario(mes, año);
  });

  generarCalendario(mes, año);
});

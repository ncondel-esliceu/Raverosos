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

    // Día de la semana del primer día del mes (0=Domingo,...)
    const primerDia = new Date(año, mes, 1).getDay();
    // Número de días que tiene el mes
    const totalDias = new Date(año, mes + 1, 0).getDate();

    let fila = document.createElement("tr");

    // Celdas vacías antes del primer día
    for (let i = 0; i < primerDia; i++) {
      fila.appendChild(document.createElement("td"));
    }

    for (let dia = 1; dia <= totalDias; dia++) {
      const celda = document.createElement("td");
      celda.textContent = dia;
      celda.classList.add("fecha");

      // Si es 10 de mayo (mes=4, dia=10), añade enlace
      if (mes === 4 && dia === 10) {
        celda.style.cursor = "pointer";
        celda.addEventListener("click", () => {
          window.location.href = "10mayo.html";
        });
      }

      fila.appendChild(celda);

      if (fila.children.length === 7) {
        tbody.appendChild(fila);
        fila = document.createElement("tr");
      }
    }

    // Completar la última fila con celdas vacías si es necesario
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

// Obtener el botón HTML
var boton = document.getElementById("MiBoton");

// Agregar un evento de clic al botón
boton.addEventListener("click", function() {

  // Obtener el elemento HTML que deseas ocultar
  var seccion = document.getElementsByClassName("carrera")[0];

  // Ocultar la sección utilizando CSS
  seccion.style.display = "none";
});
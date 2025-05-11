function calcularEdad() {
  const fecha = document.getElementById("nacimiento").value;
  const resultado = document.getElementById("resultado");

  if (!fecha) {
    resultado.textContent = "Por favor, selecciona una fecha válida.";
    return;
  }

  const anioNacimiento = new Date(fecha).getFullYear();
  const anioActual = new Date().getFullYear();
  const edad = anioActual - anioNacimiento;

  resultado.textContent = `Tienes ${edad} años.`;
}

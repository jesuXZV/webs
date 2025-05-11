function convertirAMayusculas() {
    const inputTexto = document.getElementById("texto").value;
    const resultado = document.getElementById("resultado");
  
    if (inputTexto.trim() === "") {
      resultado.textContent = "Por favor, escribe algo.";
    } else {
      resultado.textContent = inputTexto.toUpperCase();
    }
  }
  
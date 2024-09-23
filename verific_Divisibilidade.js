function verificarDivisibilidade(valor1, valor2) {
  if (typeof valor1 !== "number" || typeof valor2 !== "number") {
    return "Não é possível verificar a divisibilidade de valores não numéricos.";
  }

  if (valor2 === 0) {
    return "Divisor não pode ser zero.";
  }

  if (valor1 % valor2 === 0) {
    return "Os valores são divisíveis.";
  } else {
    return "Os valores não são divisíveis.";
  }
}

function verificar() {
  const valor1 = parseFloat(document.getElementById("valor1").value);
  const valor2 = parseFloat(document.getElementById("valor2").value);

  if (isNaN(valor1) || isNaN(valor2)) {
    document.getElementById("resultado").innerText =
      "Por favor, insira valores válidos.";
    return;
  }

  const resultado = verificarDivisibilidade(valor1, valor2);
  document.getElementById("resultado").innerText = resultado;
}

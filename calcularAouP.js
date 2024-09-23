function calcularAouP(operador, altura, base) {
  if (operador === "Área") {
    return base * altura;
  }

  if (operador === "Perímetro") {
    return 2 * (base + altura);
  }
}

function calcular() {
  const operador = document.getElementById("operador").value;
  const base = parseFloat(document.getElementById("base").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(base) || isNaN(altura)) {
    document.getElementById("resultado").innerText =
      "Por favor, insira valores válidos.";
    return;
  }

  const resultado = calcularAouP(operador, altura, base);
  document.getElementById("resultado").innerText =
    `O resultado é: ${resultado}`;
}

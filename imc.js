// index.js

// Função para calcular o IMC
function calcularIMC(altura, peso) {
  return peso / altura ** 2;
}

// Função para mostrar o índice de IMC
function mostrarIndice(resultado) {
  if (resultado <= 16.9) {
    return "Você está muito abaixo do peso.";
  }

  if (resultado >= 17 && resultado <= 18.4) {
    return "Você está abaixo do peso.";
  }

  if (resultado >= 18.5 && resultado <= 24.9) {
    return "Seu peso é normal.";
  }

  if (resultado >= 25 && resultado <= 29.9) {
    return "Acima do peso.";
  }

  if (resultado >= 30 && resultado <= 34.9) {
    return "Obesidade grau 1.";
  }

  if (resultado >= 35 && resultado <= 40) {
    return "Obesidade grau 2.";
  } else {
    return "Obesidade grau 3.";
  }
}

// Função para calcular e exibir o IMC
function calcularEExibirIMC() {
  const alturaElement = document.getElementById("altura");
  const pesoElement = document.getElementById("peso");
  const resultadoElement = document.getElementById("resultado");

  const altura = parseFloat(alturaElement.value);
  const peso = parseFloat(pesoElement.value);

  if (altura <= 0 || peso <= 0) {
    resultadoElement.textContent = "Altura e peso devem ser positivos.";
    resultadoElement.style.color = "red";
    return;
  }

  const imc = calcularIMC(altura, peso);
  resultadoElement.textContent = mostrarIndice(imc);
  resultadoElement.style.color = "green";
}

"use strict";
function calcularTemp(escalaAtual, converter, temperatura) {
  if (escalaAtual === converter) {
    return temperatura;
  }
  if (escalaAtual === "Celsius" && converter === "Kelvin") {
    return temperatura + 273.15;
  }
  if (escalaAtual === "Celsius" && converter === "Fahrenheit") {
    return temperatura * (9 / 5) + 32;
  }
  if (escalaAtual === "Fahrenheit" && converter === "Celsius") {
    return (temperatura - 32) * (5 / 9);
  }
  if (escalaAtual === "Fahrenheit" && converter === "Kelvin") {
    return (temperatura - 32) * (5 / 9) + 273.15;
  }
  if (escalaAtual === "Kelvin" && converter === "Celsius") {
    return temperatura - 273.15;
  }
  if (escalaAtual === "Kelvin" && converter === "Fahrenheit") {
    return (temperatura - 273.15) * (9 / 5) + 32;
  }
  throw new Error("Escala de conversão inválida");
}
document.addEventListener("DOMContentLoaded", function () {
  var converterButton = document.getElementById("converter");
  var temperaturaInput = document.getElementById("temperatura");
  var escalaAtualSelect = document.getElementById("escalaAtual");
  var escalaDestinoSelect = document.getElementById("escalaDestino");
  var resultadoPara = document.getElementById("resultado");
  if (
    converterButton &&
    temperaturaInput &&
    escalaAtualSelect &&
    escalaDestinoSelect &&
    resultadoPara
  ) {
    converterButton.addEventListener("click", function () {
      var temperatura = parseFloat(temperaturaInput.value);
      var escalaAtual = escalaAtualSelect.value;
      var escalaDestino = escalaDestinoSelect.value;
      console.log("Temperatura: " + temperatura);
      console.log("Escala Atual: " + escalaAtual);
      console.log("Escala de Conversão: " + escalaDestino);
      var resultado = calcularTemp(escalaAtual, escalaDestino, temperatura);
      resultadoPara.innerText =
        "Resultado: " + resultado.toFixed(2) + " \u00B0" + escalaDestino;
    });
  } else {
    console.error("Elementos HTML necessários não encontrados.");
  }
});

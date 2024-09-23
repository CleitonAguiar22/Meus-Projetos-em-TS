type Escala = "Celsius" | "Kelvin" | "Fahrenheit";

function calcularTemp(
  escalaAtual: Escala,
  converter: Escala,
  temperatura: number
): number {
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

// Função que será chamada quando o botão for clicado
document.addEventListener("DOMContentLoaded", () => {
  const converterButton = document.getElementById("converter");
  const temperaturaInput = document.getElementById(
    "temperatura"
  ) as HTMLInputElement;
  const escalaAtualSelect = document.getElementById(
    "escalaAtual"
  ) as HTMLSelectElement;
  const escalaDestinoSelect = document.getElementById(
    "escalaDestino"
  ) as HTMLSelectElement;
  const resultadoPara = document.getElementById("resultado");

  if (
    converterButton &&
    temperaturaInput &&
    escalaAtualSelect &&
    escalaDestinoSelect &&
    resultadoPara
  ) {
    converterButton.addEventListener("click", () => {
      const temperatura = parseFloat(temperaturaInput.value);
      const escalaAtual = escalaAtualSelect.value as Escala;
      const escalaDestino = escalaDestinoSelect.value as Escala;

      // Verificação para depuração
      console.log(`Temperatura: ${temperatura}`);
      console.log(`Escala Atual: ${escalaAtual}`);
      console.log(`Escala de Conversão: ${escalaDestino}`);

      // Fazendo a conversão e exibindo o resultado
      const resultado = calcularTemp(escalaAtual, escalaDestino, temperatura);
      resultadoPara.innerText = `Resultado: ${resultado.toFixed(2)} °${escalaDestino}`;
    });
  } else {
    console.error("Elementos HTML necessários não encontrados.");
  }
});

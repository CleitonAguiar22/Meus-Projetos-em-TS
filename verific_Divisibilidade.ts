function verificarDivisibilidade(valor1: unknown, valor2: unknown): string {
  // Verifica se ambos os valores são números
  if (typeof valor1 !== "number" || typeof valor2 !== "number") {
    throw new Error(
      "Não é possível verificar a divisibilidade de valores não numéricos."
    );
  }

  // Verifica se o divisor não é zero
  if (valor2 === 0) {
    throw new Error("Divisor não pode ser zero.");
  }

  // Verifica se valor1 é divisível por valor2
  if (valor1 % valor2 === 0) {
    return "Os valores são divisíveis.";
  } else {
    return "Os valores não são divisíveis.";
  }
}

// Teste da função
console.log(verificarDivisibilidade(10, 2)); // Exemplo de uso correto
console.log(verificarDivisibilidade(10, 0)); // Exemplo de uso incorreto (divisor zero)

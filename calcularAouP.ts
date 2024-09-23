type Operador = "Área" | "Perímetro";

function calcularAouP(operador: Operador, altura: number, base: number) {
  if (operador === "Área") {
    return base * altura;
  }

  if (operador === "Perímetro") {
    return 2 * (base + altura);
  }
}

console.log(calcularAouP("Perímetro", 10, 5));

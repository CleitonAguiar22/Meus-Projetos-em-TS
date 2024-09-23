type idade = number;

function VerificarFaixaEtaria(idade: idade): unknown {
  if (idade >= 0 && idade <= 12) {
    return "Criança.";
  }

  if (idade >= 13 && idade <= 17) {
    return "Adolescente.";
  }

  if (idade >= 18 && idade <= 59) {
    return "Adulto.";
  }

  if (idade > 59) {
    return "Idoso.";
  }

  return new Error(
    "Não foi possivel verificar a faixa etária, pois a idade não é um valor."
  );
}

console.log(VerificarFaixaEtaria(10));

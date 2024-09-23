function VerificarFaixaEtaria(idade) {
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
    "Não foi possível verificar a faixa etária, pois a idade não é um valor."
  );
}

function verificarIdade() {
  const idade = document.getElementById("idade").value;
  const resultado = VerificarFaixaEtaria(idade);
  document.getElementById("resultado").innerText =
    typeof resultado === "string" ? resultado : resultado.message;
}

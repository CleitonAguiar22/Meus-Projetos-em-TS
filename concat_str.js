function concatStrings(palavra1, palavra2) {
  return palavra1.trim() + " " + palavra2.trim();
}

function concatenar() {
  const palavra1 = document.getElementById("palavra1").value;
  const palavra2 = document.getElementById("palavra2").value;
  const resultado = concatStrings(palavra1, palavra2);
  document.getElementById("resultado").innerText = resultado;
}

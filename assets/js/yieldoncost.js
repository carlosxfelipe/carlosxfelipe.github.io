const calcularYieldOnCost = () => {
  const precoAquisicao = document
    .getElementById("precoAquisicao")
    .value.replace(/,/g, ".");
  precoAquisicao * 100;
  const rendimento = document
    .getElementById("rendimento")
    .value.replace(/,/g, ".");
  rendimento * 12;

  let yieldOnCost = (rendimento / precoAquisicao) * 100;

  let resultadoMes = document.querySelector("section#resultadoMes");
  let resultadoAno = document.querySelector("section#resultadoAno");

  resultadoMes.innerHTML = `<p>Seu yield on cost foi de ${yieldOnCost.toFixed(
    3
  )}% nesse mês.</p>`;
  resultadoMes.className = `alert alert-warning`;
  resultadoAno.innerHTML = `<p>A rentabilidade anualizada seria de ${(
    yieldOnCost * 12
  ).toFixed(3)}%.</p>`;
  resultadoAno.className = "alert alert-warning";
};

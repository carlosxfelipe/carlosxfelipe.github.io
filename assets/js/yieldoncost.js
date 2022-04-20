const calcularYieldOnCost = () => {
  let precoAquisicao = document
    .getElementById("precoAquisicao")
    .value.replace(/,/g, ".");
  precoAquisicao * 100;
  let rendimento = document
    .getElementById("rendimento")
    .value.replace(/,/g, ".");
  rendimento * 12;

  let yieldOnCost = (rendimento / precoAquisicao) * 100;

  let resultadoMes = document.querySelector("section#resultadoMes");
  let resultadoAno = document.querySelector("section#resultadoAno");

  resultadoMes.innerHTML = `<p>Seu yield on cost foi de ${yieldOnCost.toFixed(
    3
  )}% nesse mês.</p>`;
  resultadoAno.innerHTML = `<p>A rentabilidade anualizada seria de ${(
    yieldOnCost * 12
  ).toFixed(3)}%.</p>`;
};

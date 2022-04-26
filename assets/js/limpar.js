function limparDarf() {
  document.getElementById("precoMedio").value = "";
  document.getElementById("quantidadeDeCotas").value = "";
  document.getElementById("valorDeVenda").value = "";

  let resultadoVenda = document.querySelector("section#resultadoVenda");
  resultadoVenda.innerHTML = "<p>Seu lucro líquido na operação foi de ...</p>";
  resultadoVenda.className = "alert alert-primary";
}

const limparYieldOnCost = () => {
  document.getElementById("precoAquisicao").value = "";
  document.getElementById("rendimento").value = "";

  let resultadoMes = document.querySelector("section#resultadoMes");
  let resultadoAno = document.querySelector("section#resultadoAno");
  resultadoMes.innerHTML = `<p>Seu yield on cost foi de ... nesse mês.</p>`;
  resultadoAno.innerHTML = `<p>A rentabilidade anualizada seria de ...</p>`;
  resultadoMes.className = "alert alert-primary";
  resultadoAno.className = "alert alert-primary";
};

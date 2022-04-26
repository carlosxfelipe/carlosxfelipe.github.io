const changeSectionColor = (color) => {
  let resultadoVenda = document.querySelector("section#resultadoVenda");
  resultadoVenda.className = `alert alert-${color}`;
};

function calcularDarf() {
  const precoMedio = document
    .getElementById("precoMedio")
    .value.replace(/,/g, ".");
  const quantidadeDeCotas = document.getElementById("quantidadeDeCotas").value;
  const valorDeVenda = document
    .getElementById("valorDeVenda")
    .value.replace(/,/g, ".");

  let imposto = (valorDeVenda - precoMedio) * 0.2;
  let darf = imposto * quantidadeDeCotas;
  let lucro = (valorDeVenda - precoMedio) * quantidadeDeCotas - darf;
  let prejuizo = (valorDeVenda - precoMedio) * quantidadeDeCotas * -1;

  let resultadoVenda = document.querySelector("section#resultadoVenda");

  if (darf > 0 && darf < 10) {
    resultadoVenda.innerHTML = `<p>Seu lucro líquido na operação foi de R$${lucro.toFixed(
      2
    )} e você por enquanto não precisa emitir um DARF no valor de R$ ${darf.toFixed(
      2
    )}, mas precisa contabilizar esse valor com outras vendas futuras.</p>`;
    changeSectionColor("success");
  } else if (darf >= 10) {
    resultadoVenda.innerHTML = `<p>Seu lucro líquido na operação foi de R$${lucro.toFixed(
      2
    )} e você precisará emitir um DARF no valor de R$${darf.toFixed(
      2
    )} até o último dia útil do mês seguinte à liquidação da operação que gerou o ganho.</p>`;
    changeSectionColor("success");
  } else {
    resultadoVenda.innerHTML = `<p>Seu prejuízo na operação foi de R$${prejuizo.toFixed(
      2
    )} e você poderá contabilizar esse prejuízo com outras vendas futuras para compensação.</p>`;
    changeSectionColor("danger");
  }
}

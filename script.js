const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
    logo.setAttribute("src", "imagens/3d-buildings-black.png");
  } else {
    nav.classList.remove("active");
    logo.setAttribute("src", "imagens/3d-buildings.png");
  }
}

/* Realizando lucro/prejuízo com a venda de FIIs */

function calcularLucro() {}

function resultado() {
  let precoMedio = document
    .getElementById("precoMedio")
    .value.replace(/,/g, ".");
  let quantidadeDeCotas = document.getElementById("quantidadeDeCotas").value;
  let valorDeVenda = document
    .getElementById("valorDeVenda")
    .value.replace(/,/g, ".");
  imposto = (valorDeVenda - precoMedio) * 0.2;
  darf = imposto * quantidadeDeCotas;
  lucro = (valorDeVenda - precoMedio) * quantidadeDeCotas - darf;
  prejuizo = (valorDeVenda - precoMedio) * quantidadeDeCotas * -1;

  let res = document.querySelector("section#res");

  if (darf > 0 && darf < 10) {
    res.innerHTML = `<p>Seu lucro líquido na operação foi de R$${lucro.toFixed(
      2
    )} e você por enquanto não precisa emitir um DARF no valor de R$ ${darf.toFixed(
      2
    )}, mas precisa contabilizar esse valor com outras vendas futuras.</p>`;
  } else if (darf >= 10) {
    res.innerHTML = `<p>Seu lucro líquido na operação foi de R$${lucro.toFixed(
      2
    )} e você precisará emitir um DARF no valor de R$${darf.toFixed(
      2
    )} até o último dia útil do mês seguinte à liquidação da operação que gerou o ganho.</p>`;
  } else {
    res.innerHTML = `<p>Seu prejuízo na operação foi de R$${prejuizo.toFixed(
      2
    )} e você poderá contabilizar esse prejuízo com outras vendas futuras para compensação.</p>`;
  }
}

/* Calculando Yield on Cost (YOC) de FIIs */

function calcularYOC() {}

function resultado2() {
  let cmaquisicao = document
    .getElementById("cmaquisicao")
    .value.replace(/,/g, ".");
  cmaquisicao * 100;
  let rendimento = document
    .getElementById("rendimento")
    .value.replace(/,/g, ".");
  rendimento * 12;
  let yocost = (rendimento / cmaquisicao) * 100;

  let res2 = document.querySelector("section#res2");
  let res3 = document.querySelector("section#res3");

  res2.innerHTML = `<p>Seu yield on cost foi de ${yocost.toFixed(
    3
  )}% nesse mês.</p>`;
  res3.innerHTML = `<p>A rentabilidade anualizada seria ${(yocost * 12).toFixed(
    3
  )}%.</p>`;
}

function calcularLucro() {

}

function venda() {
    let precoMedio = document.getElementById('precoMedio').value
    let quantidadeDeCotas = document.getElementById('quantidadeDeCotas').value
    let valorDeVenda = document.getElementById('valorDeVenda').value
    imposto = (valorDeVenda - precoMedio) * 0.2
    darf = imposto * quantidadeDeCotas 
    lucro = ((valorDeVenda - precoMedio) * quantidadeDeCotas) - darf

    let res = document.querySelector('section#res')

    if (darf > 0 && darf <= 10) {
        res.innerHTML = `<p>Seu lucro líquido na operação foi de R$${lucro.toFixed(2)} e você por enquanto não precisa emitir uma DARF no valor de R$ ${darf.toFixed(2)}, mas precisa contabilizar esse valor com outras vendas futuras.</p>`
    } else if (darf > 10) {
        res.innerHTML = `<p>Seu lucro líquido na operação foi de R$${lucro.toFixed(2)} e você precisará emitir uma DARF no valor de R$${darf.toFixed(2)} até o último dia útil do mês seguinte à liquidação da operação que gerou o ganho.</p>`
    } else {
        res.innerHTML = `<p>Seu prejuízo na operação foi de R$${lucro.toFixed(2)} e você poderá contabilizar esse prejuízo com outras vendas futuras para compensação.</p>`
    }
}
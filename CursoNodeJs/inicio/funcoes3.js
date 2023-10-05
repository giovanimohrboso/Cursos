

function resultado (valor,formatacao){
    let valorTotal = valor * 10
    return formatacao(valorTotal)
}

function mostrar(valor){
    console.log(`Giovani : ${valor}`)
}

function mostrar1(valor){
    console.log(`Teste : ${valor}`)
}

function comDesconto(valor){
    console.log(`Valor com desconto = ${valor-10}`)
}

resultado(4,mostrar)

resultado(4,mostrar1)

resultado(4,comDesconto)

resultado(4,function (valor){console.log(`Função Dentro ${valor}`)})

resultado(4,(valor) => (console.log(`Função arrow ${valor}`)))


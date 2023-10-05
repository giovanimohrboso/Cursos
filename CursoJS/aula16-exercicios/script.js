let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let resultado = document.querySelector('div#resultado')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        window.alert('Numero Inválido ou ja esta na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
       // window.alert('Adicione Valores')
       window.prompt('Adicione Valores')
    } else {
        let tot = valores.length
        valores.sort((a,b) => a - b)
        menor = valores[0]
        maior = valores[tot-1]
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo , temos ${tot} numeros cadastrados.</p>`
        resultado.innerHTML += `<p>O menor numero é ${menor}.</p>`
        resultado.innerHTML += `<p>O maior numero é ${maior}.</p>`

    }
}


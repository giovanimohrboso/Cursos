
function contar(){
    var res = document.getElementById('resultado')
    var finicio = document.getElementById('txtinicio')
    var ffim = document.getElementById('txtfim')
    var fpasso = document.getElementById('txtpasso')
    if (finicio.value.length == 0) {
        alert('Informe o Inicio')
    } else if (ffim.value.length == 0) {
        alert('Informe o Fim')
    }else if (fpasso.value.length == 0) {
        alert('Informe o Passo')
    } else {

        var inicio = Number(finicio.value)
        var fim = Number(ffim.value)
        var passo = Number(fpasso.value)
        res.innerHTML = ''
        var quebra = 0
        if (inicio < fim){
            for(i=inicio;i<=fim;i=i+passo){
                res.innerHTML += i + '\u{23E9}'
                quebra += 1
                if (quebra == 10){
                    res.innerHTML += '<br>'  
                    quebra = 0
                }
            }
        } else{
            for(i=inicio;i>=fim;i=i-passo){
                res.innerHTML += i + '\u{23E9}'
                quebra += 1
                if (quebra == 10){
                    res.innerHTML += '<br>'  
                    quebra = 0
                }
            }
        }
        res.innerHTML = 'Inicio <br>' + res.innerHTML + ' Fim'
    }
}
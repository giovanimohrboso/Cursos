
function gerar(){
    var ftab = document.getElementById('seltabuada')
    var fnumero = document.getElementById('txtnumero')
    
    if (fnumero.value.length == 0) {
        alert('Informe a Tabuada Desejada')
    } else {
        var numero = Number(fnumero.value)
        ftab.innerHTML = '';
        for(i=1;i<=10;i++){
            let item = document.createElement('option')
            item.text = `${i} x ${numero} = ${i*numero}` 
            item.value = `tab${i}`
            ftab.appendChild(item)
        }
       
    }
}
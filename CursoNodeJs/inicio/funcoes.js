
function contador1(){
    for (i=1;i<1000;i++) {
        console.log(`Numero ${i}`)
}
}

function contador2(){
    for (i=1;i<1000000000;i++) {
        if (i%1000000 == 0){
            console.log(`Numero ${i}`)
        }
}
}

function contador(){
    setTimeout( function () {
    for (i=1;i<1000;i++) {
        console.log(`Numero ${i}`)
    }},1000)
}


console.log('INICIO')
contador2()
console.log('FIM')

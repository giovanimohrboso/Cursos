function parouimpar(n){
    var res
    if(n%2==0){
        res = 'Par'
    } else {
        res = 'Impar'
    }

    return res
}

function soma(n1,n2){
    let soma = n1 + n2
    return soma
}

function somaopcional(n1=0,n2=0){
    let soma = n1 + n2
    return soma
}

let res = parouimpar(4)
console.log(res)

console.log(soma(1,2))

console.log(somaopcional(1))

//arrow function
const RESULTADO = (a,b) => a-b

console.log(RESULTADO(12,1))
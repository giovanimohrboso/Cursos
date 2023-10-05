let num = [10,3,9,2,5]

for(i=0;i<num.length;i++){
    console.log(`Na posição ${i} tem o conteudo ${num[i]}`)
}


//procurar pelo conteudo
console.log(`O conteudo 9 esta na posição ${num.indexOf(9)}`)

//ordenando
num.sort((a,b) => a - b)
console.log(`Depois de ordenado o conteudo 9 esta na posição ${num.indexOf(9)}`)

for(let numeros in num){
    console.log(`Na posição ${numeros} tem o conteudo ${num[numeros]}`)
}
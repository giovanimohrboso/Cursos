function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('resultado')
    var img = document.createElement('img')
    if (fano.value.length == 0 || fano.value > ano){
        alert('Ano não pode ser Nulo ou Maior que o Ano atual')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade < 12){
                //criança
                img.setAttribute('src','img-menino.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','img-homem.png')
            }else{
                //idoso
                img.setAttribute('src','img-idoso.png')
            }
        }else{
            genero = 'Mulher'
            if (idade < 12){
                //criança
                img.setAttribute('src','img-menina.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','img-mulher.png')
            }else{
                //idoso
                img.setAttribute('src','img-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}
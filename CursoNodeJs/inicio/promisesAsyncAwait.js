const util = require('util') 
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    return new Promise(function resolvePromise(resolve,reject) {
        setTimeout(function () {
            return resolve({
                   id: 1,
                   nome: 'Aladin',
                  dataNascimento: new Date()
                  })
        },1000)
    })
    
}

function obterTelefone(idUsuario){
    return new Promise(function resolvePromise(resolve,reject) {
        setTimeout(() => {
        return resolve({
        telefone :'999999999',
        ddd: '11'})
    },2000)
}) 
} 

function obterEndereco(idUsuario,callback){
    setTimeout(() => {
        return callback(null,{
        rua :'dos Bobos',
        numero: '0'})
    },2000)
    
} 

main()

async function main() {
    try{
        console.time('medir-promise')
        const usuario = await(obterUsuario())
        const telefone = await(obterTelefone(usuario.id))
        const endereco = await(obterEnderecoAsync(usuario.id))
        console.log(`
            Nome: ${usuario.nome}
            Endereço : ${endereco.rua},${endereco.numero} 
            Telefone : (${telefone.ddd}) ${telefone.telefone}
        `)
        console.timeEnd('medir-promise')
    }
    catch (error){
        console.error('Erro',error)
    }
}

main2()

async function main2() {
    try{
        console.time('medir-promise2')
        const usuario = await(obterUsuario())
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const telefone = resultado[0]
        const endereco = resultado[1]
        console.log(`
            Nome: ${usuario.nome}
            Endereço : ${endereco.rua},${endereco.numero} 
            Telefone : (${telefone.ddd}) ${telefone.telefone}
        `)
        console.timeEnd('medir-promise2')
    }
    catch (error){
        console.error('Erro',error)
    }
}
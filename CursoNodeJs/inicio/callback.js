/*
Obter usuario
Obter numero de telefone de seu ID
Obter o Endereço do usuario pelo ID 
*/

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null,{
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
                })
        },1000)
}


function obterTelefone(idUsuario,callback){
    setTimeout(() => {
        return callback(null,{
        telefone :'999999999',
        ddd: '11'})
    },2000)
    
} 

function obterEndereco(idUsuario,callback){
    setTimeout(() => {
        return callback(null,{
        Rua :'dos Bobos',
        numero: '0'})
    },2000)
    
} 

function resolverTelefone(erro,telefone){
    console.log('Telefone',telefone)
}

function resolverEndereco(erro,endereco){
    if (!erro){
        console.log('Endereco',endereco)
    }
}

function resolverUsuario(erro,usuario){
    console.log('usuario',usuario)
    obterTelefone(usuario.id,resolverTelefone)
    obterEndereco(usuario.id,resolverEndereco)
    
}

obterUsuario(resolverUsuario)

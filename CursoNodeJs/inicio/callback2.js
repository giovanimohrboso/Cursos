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
        return callback(1,{
        telefone :'999999999',
        ddd: '11'})
    },2000)
    
} 

function obterEndereco(idUsuario,callback){
    setTimeout(() => {
        return callback(1,{
        Rua :'dos Bobos',
        numero: '0'})
    },2000)
    
} 


obterUsuario(function resolverUsuario(erro,usuario){

    console.log('usuario',usuario)

    obterTelefone(usuario.id,function resolverTelefone(erro,telefone){
        console.log('Telefone',telefone)
    })

    obterEndereco(usuario.id,function resolverEndereco(erro,endereco){
        if (!erro){
            console.log('Endereco',endereco)
        }
    })
    
})
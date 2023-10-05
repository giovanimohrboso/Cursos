/*
Obter usuario
Obter numero de telefone de seu ID
Obter o Endereço do usuario pelo ID 
*/

function obterUsuario() {
        
        return {
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
                }
}


function obterTelefone(idUsuario){
    if (idUsuario == 1){
        return {
            telefone :'999999999',
            ddd: '11'
        }
    } else {
        return {Erro: 'Id Não encontrado'}
    }
}


const usuario = obterUsuario()
console.log('usuario',usuario)
const telefone = obterTelefone(usuario.id)
console.log('Telefone',telefone)




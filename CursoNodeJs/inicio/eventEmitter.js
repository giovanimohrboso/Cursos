const EventEmitter = require('events')

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento,function (click){
    console.log(`Usuario Clicou ${click}`)
})

meuEmissor.emit(nomeEvento, 'Na barra de rolagem')
meuEmissor.emit(nomeEvento, 'OK')
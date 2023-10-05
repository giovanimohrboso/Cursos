import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

    btnCadastro:boolean = true;

    tabela:boolean = true;

    cliente = new Cliente();

    //Json de cliente
    clientes:Cliente[] = [];

    constructor(private servico:ClienteService){}

    //metodo de selecao total
    selecionar():void{
      this.servico.selecionar().subscribe(retorno => this.clientes = retorno)
    }

    //metodo de cadastro
    cadastrar():void{
      this.servico.cadastrar(this.cliente).subscribe(retorno => {
        this.clientes.push(retorno);
        //limpar formulario
        this.cliente = new Cliente();
        alert(`Cliente Cadastrado com Sucesso!`)

      });
    }

    //metodo de edição
    editar():void{
      this.servico.editar(this.cliente).subscribe(retorno => {
        let posicao = this.clientes.findIndex(obj =>{
          return obj.codigo == retorno.codigo;
        })
        this.clientes[posicao]= retorno;
        //limpar formulario
        this.cliente = new Cliente();
        alert(`Cliente Alterado com Sucesso!`)
        this.btnCadastro = true;
        this.tabela = true;

      });
    }
    
    //metodo de remocao
    remover():void{
      this.servico.remover(this.cliente.codigo).subscribe(retorno => {
        
        });
        let posicao = this.clientes.findIndex(obj =>{
          return obj.codigo == this.cliente.codigo;
        })
        
        this.clientes.splice(posicao,1);
  
        alert(`Cliente Removido com Sucesso!`)
        this.btnCadastro = true;
        this.tabela = true;
  
      }

    //metodo para selectao de cliente
    selecionarCliente(posicao:number):void{
      this.cliente = this.clientes[posicao];

      this.btnCadastro = false;
      this.tabela = false;

    }

    cancelar():void{
      this.btnCadastro = true;
      this.tabela = true;

    }

    //metodo de inicializacao
    ngOnInit(){
      this.selecionar();
    }
    

}

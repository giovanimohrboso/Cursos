package br.com.projeto.api.controle;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.api.modelo.Cliente;
import br.com.projeto.api.repositorio.Repositorio;

@RestController
@CrossOrigin(origins = "*")
public class Controle {

    @Autowired
    private Repositorio acao;

    @GetMapping("/")
    public List<Cliente> consultarCLientes(){
        return (List<Cliente>) acao.findAll();
    }
    @GetMapping("/{id}")
    public Optional<Cliente> consultarCLientesPorId(@PathVariable(value = "id") Long id){
        return acao.findById(id);
    }

    @PostMapping("")
    public Cliente cadastrar(@RequestBody Cliente c){
        return acao.save(c);
    }

    @PutMapping("/")
    public Cliente alterar(@RequestBody Cliente c){
        return acao.save(c);
    }

    @DeleteMapping("/{id}")
    public String deletar(@PathVariable(value = "id") Long id){
        acao.deleteById(id);
        return "Deletado";
    }
    
}

package br.com.academify2.resource;

import br.com.academify2.model.Aluno;
import br.com.academify2.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/aluno")
public class AlunoResource {

    @Autowired
    private AlunoRepository alunoRepository;

    private ResponseEntity<Aluno> responseEntity;

    @GetMapping("/listar")
    public List<Aluno> listar() {
        return alunoRepository.findAll();
    }

    @GetMapping("get/{id}")
    public Aluno get(@PathVariable(value = "id") long id) {
        return alunoRepository.findById(id);
    }

    @PostMapping("/incluir")
    public Aluno incluir(@RequestBody Aluno aluno) {
        return alunoRepository.save(aluno);
    }

    @PutMapping("/editar")
    public ResponseEntity<Aluno> editar(@RequestBody Aluno aluno) {
        aluno = alunoRepository.save(aluno);
        return new ResponseEntity<Aluno>(aluno, HttpStatus.OK);
    }

    @PostMapping("/remover")
    public Aluno remover(@RequestBody Aluno aluno) {
        alunoRepository.delete(aluno);
        return aluno;
    }

    @GetMapping("/getTotal")
    public int getTotal() {
        return alunoRepository.findAll().size();
    }

}

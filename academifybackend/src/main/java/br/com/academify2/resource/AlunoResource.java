package br.com.academify2.resource;

import br.com.academify2.model.Aluno;
import br.com.academify2.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}

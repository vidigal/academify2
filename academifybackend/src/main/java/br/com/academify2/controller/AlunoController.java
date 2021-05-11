package br.com.academify2.controller;

import br.com.academify2.model.Aluno;

public class AlunoController {

    public boolean validarAluno(Aluno aluno) {
        if (isNomeValido(aluno)) {
            return true;
        } else {
            return false;
        }
    }

    /** Verifica se o nome do aluno é válido.
     *
     * Um nome válido não pode ser nulo e deve ter mais que 3 caracteres
     *
     * @param aluno
     * @return
     */
    private boolean isNomeValido(Aluno aluno) {
        if ((aluno.getNome().isEmpty()) || (aluno.getNome().length() < 3)) {
            return false;
        }
        return true;
    }

}

package com.chavier.chavierwebmidia.service;

import com.chavier.chavierwebmidia.model.Projeto;
import com.chavier.chavierwebmidia.repository.ProjetoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjetoService {

    private final ProjetoRepository repository;

    public ProjetoService(ProjetoRepository repository) {
        this.repository = repository;
    }

    public List<Projeto> listarTodos() {
        return repository.findAll();
    }

    public Projeto salvar(Projeto projeto) {
        return repository.save(projeto);
    }

    public Projeto buscarPorId(Long id) {
        Optional<Projeto> projeto = repository.findById(id);
        return projeto.orElse(null);
    }

    public void excluir(Long id) {
        repository.deleteById(id);
    }
}

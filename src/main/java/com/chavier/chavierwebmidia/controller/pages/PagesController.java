package com.chavier.chavierwebmidia.controller.pages;

import com.chavier.chavierwebmidia.service.ProjetoService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class PagesController {

    private final ProjetoService projetoService;

    public PagesController(ProjetoService projetoService) {
        this.projetoService = projetoService;
    }

    @GetMapping("/sobre")
    public String sobre() {
        return "paginas/sobre";
    }

    @GetMapping("/servicos")
    public String servicos() {
        return "paginas/servicos";
    }


    @GetMapping("/contatos")
    public String contatos() {
        return "paginas/contatos";
    }
}

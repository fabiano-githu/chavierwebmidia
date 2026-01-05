package com.chavier.chavierwebmidia.controller.pagescontroller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class PagesController {

    @GetMapping("/sobre")
    public String sobre() {
        return "paginas/sobre";
    }

    @GetMapping("/servicos")
    public String servicos() {
        return "paginas/servicos";
    }

    @GetMapping("/portifolio")
    public String portifolio() {
        return "paginas/portifolio";
    }

    @GetMapping("/contatos")
    public String contatos() {
        return "paginas/contatos";
    }
}

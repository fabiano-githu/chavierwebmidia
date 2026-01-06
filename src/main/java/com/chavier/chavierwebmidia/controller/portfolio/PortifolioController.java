package com.chavier.chavierwebmidia.controller.portfolio;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PortifolioController {

    // Apenas mapeia a rota /portfolio para abrir portfolio.html
    @GetMapping("/portfolio")
    public String portfolio() {
        return "paginas/portfolio"; // busca src/main/resources/templates/portfolio.html
    }
}

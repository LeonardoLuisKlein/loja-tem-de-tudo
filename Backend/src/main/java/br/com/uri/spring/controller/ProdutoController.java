package br.com.uri.spring.controller;

import br.com.uri.spring.dto.ProdutoDTO;
import br.com.uri.spring.service.ProdutoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/v1")
public class ProdutoController {
    private ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @PostMapping("/produto")
    public ResponseEntity<Void> postData (@RequestBody @Valid ProdutoDTO produtoDTO){
        produtoService.saveObject(produtoDTO);
        return ResponseEntity.accepted().build();
    }
}

package br.com.uri.spring.controller;

import br.com.uri.spring.dto.ProdutoDTO;
import br.com.uri.spring.entities.ProdutoEntity;
import br.com.uri.spring.service.ProdutoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/v1/produtos")
public class ProdutoController {
    private final ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProdutoEntity> getProdutoById(@PathVariable Long id) {
        ProdutoEntity produto = produtoService.getOneObject(id);
        return ResponseEntity.ok(produto);
    }

    @GetMapping
    public ResponseEntity<List<ProdutoEntity>> getAllProdutos() {
        List<ProdutoEntity> produtos = produtoService.getAllObjects();
        return ResponseEntity.ok(produtos);
    }

    @PostMapping
    public ResponseEntity<Void> createProduto(@RequestBody @Valid ProdutoDTO produtoDTO) {
        produtoService.saveObject(produtoDTO);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateProduto(@PathVariable Long id, @RequestBody @Valid ProdutoDTO produtoDTO) {
        produtoService.update(id, produtoDTO);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduto(@PathVariable Long id) {
        produtoService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
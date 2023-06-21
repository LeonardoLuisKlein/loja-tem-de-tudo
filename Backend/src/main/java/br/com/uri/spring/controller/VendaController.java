package br.com.uri.spring.controller;

import br.com.uri.spring.dto.VendaDTO;
import br.com.uri.spring.entities.VendaEntity;
import br.com.uri.spring.service.VendaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/v1/vendas")
public class VendaController {
    private VendaService vendaService;

    public VendaController(VendaService vendaService) {
        this.vendaService = vendaService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<VendaEntity> getClienteById(@PathVariable Long id) {
        VendaEntity venda = vendaService.getOneObject(id);
        return ResponseEntity.ok(venda);
    }

    @GetMapping
    public ResponseEntity<List<VendaEntity>> getAllClientes() {
        List<VendaEntity> clientes = vendaService.getAllObjects();
        return ResponseEntity.ok(clientes);
    }
    @PostMapping
    public ResponseEntity<Void> postData (@RequestBody @Valid VendaDTO vendaDTO){
        vendaService.saveObject(vendaDTO);
        return ResponseEntity.accepted().build();
    }
}

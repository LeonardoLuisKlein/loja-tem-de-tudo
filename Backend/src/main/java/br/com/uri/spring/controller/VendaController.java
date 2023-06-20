package br.com.uri.spring.controller;

import br.com.uri.spring.dto.VendaDTO;
import br.com.uri.spring.service.VendaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/v1")
public class VendaController {
    private VendaService vendaService;

    public VendaController(VendaService vendaService) {
        this.vendaService = vendaService;
    }

    @PostMapping("/venda")
    public ResponseEntity<Void> postData (@RequestBody @Valid VendaDTO vendaDTO){
        vendaService.saveObject(vendaDTO);
        return ResponseEntity.accepted().build();
    }
}

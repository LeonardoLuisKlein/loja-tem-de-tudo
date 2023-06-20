package br.com.uri.spring.controller;

import br.com.uri.spring.dto.ClienteDTO;
import br.com.uri.spring.service.ClienteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/v1")
public class ClienteController {
    private ClienteService clienteService;

    public ClienteController(ClienteService clienteService){this.clienteService = clienteService;}

    @PostMapping("/cliente")
    public ResponseEntity<Void> postData(@RequestBody @Valid ClienteDTO clienteDTO){
        clienteService.saveObject(clienteDTO);
        return ResponseEntity.accepted().build();
    }
}

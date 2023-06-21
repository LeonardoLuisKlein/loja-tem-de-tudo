package br.com.uri.spring.controller;

import br.com.uri.spring.dto.ClienteDTO;
import br.com.uri.spring.entities.ClienteEntity;
import br.com.uri.spring.service.ClienteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/v1/clientes")
public class ClienteController {
    private final ClienteService clienteService;

    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteEntity> getClienteById(@PathVariable Long id) {
        ClienteEntity cliente = clienteService.getOneObject(id);
        return ResponseEntity.ok(cliente);
    }

    @GetMapping
    public ResponseEntity<List<ClienteEntity>> getAllClientes() {
        List<ClienteEntity> clientes = clienteService.getAllObjects();
        return ResponseEntity.ok(clientes);
    }

    @PostMapping
    public ResponseEntity<Void> createCliente(@RequestBody @Valid ClienteDTO clienteDTO) {
        clienteService.saveObject(clienteDTO);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateCliente(@PathVariable Long id, @RequestBody @Valid ClienteDTO clienteDTO) {
        clienteService.update(id, clienteDTO);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCliente(@PathVariable Long id) {
        clienteService.delete(id);
        return ResponseEntity.noContent().build();
    }
}

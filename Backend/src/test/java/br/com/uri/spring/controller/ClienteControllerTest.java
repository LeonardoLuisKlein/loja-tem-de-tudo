package br.com.uri.spring.controller;

import br.com.uri.spring.dto.ClienteDTO;
import br.com.uri.spring.entities.ClienteEntity;
import br.com.uri.spring.service.ClienteService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ClienteControllerTest {

    @Mock
    private ClienteService clienteService;

    @InjectMocks
    private ClienteController clienteController;

    private ClienteEntity clienteEntity;
    private ClienteDTO clienteDTO;

    @BeforeEach
    public void setUp() {
        clienteEntity = new ClienteEntity();
        clienteEntity.setID_Cliente(1L);
        clienteEntity.setNome("Afonso");
        clienteEntity.setCPF("123.456.789-00");
        clienteEntity.setDataNasc("2023-06-24");
        clienteEntity.setEndereco("Rua 1");

        clienteDTO = new ClienteDTO();
        clienteDTO.setNome("Augusto");
        clienteDTO.setCPF("123.456.789-00");
        clienteDTO.setDataNasc("2023-06-24");
        clienteDTO.setEndereco("Rua 2");
    }

    @Test
    public void testGetClienteById() {
        when(clienteService.getOneObject(1L)).thenReturn(clienteEntity);

        ResponseEntity<ClienteEntity> response = clienteController.getClienteById(1L);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(clienteEntity, response.getBody());

        verify(clienteService, times(1)).getOneObject(1L);
    }

    @Test
    public void testGetAllClientes() {
        List<ClienteEntity> clientes = Arrays.asList(clienteEntity, clienteEntity);
        when(clienteService.getAllObjects()).thenReturn(clientes);

        ResponseEntity<List<ClienteEntity>> response = clienteController.getAllClientes();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(clientes, response.getBody());

        verify(clienteService, times(1)).getAllObjects();
    }

    @Test
    public void testCreateCliente() {
        ResponseEntity<Void> response = clienteController.createCliente(clienteDTO);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());

        verify(clienteService, times(1)).saveObject(clienteDTO);
    }

    @Test
    public void testUpdateCliente() {
        ResponseEntity<Void> response = clienteController.updateCliente(1L, clienteDTO);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());

        verify(clienteService, times(1)).update(1L, clienteDTO);
    }

    @Test
    public void testDeleteCliente() {
        ResponseEntity<Void> response = clienteController.deleteCliente(1L);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());

        verify(clienteService, times(1)).delete(1L);
    }
}

package br.com.uri.spring.service;

import br.com.uri.spring.dto.ClienteDTO;
import br.com.uri.spring.entities.ClienteEntity;
import br.com.uri.spring.repositories.ClienteRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class ClienteServiceTest {

    @Mock
    private ClienteRepository clienteRepository;

    @InjectMocks
    private ClienteService clienteService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetOneObject() {
        long id = 1L;
        ClienteEntity clienteEntity = new ClienteEntity();
        clienteEntity.setID_Cliente(id);

        when(clienteRepository.findById(id)).thenReturn(Optional.of(clienteEntity));

        ClienteEntity result = clienteService.getOneObject(id);

        assertNotNull(result);
        assertEquals(id, result.getID_Cliente());
        verify(clienteRepository, times(1)).findById(id);
    }

    @Test
    public void testGetOneObject_ThrowsNoSuchElementException() {
        long id = 1L;

        when(clienteRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(NoSuchElementException.class, () -> clienteService.getOneObject(id));
        verify(clienteRepository, times(1)).findById(id);
    }

    @Test
    public void testGetAllObjects() {
        List<ClienteEntity> clienteEntities = new ArrayList<>();
        clienteEntities.add(new ClienteEntity());
        clienteEntities.add(new ClienteEntity());

        when(clienteRepository.findAll()).thenReturn(clienteEntities);

        List<ClienteEntity> results = clienteService.getAllObjects();

        assertNotNull(results);
        assertEquals(clienteEntities.size(), results.size());
        verify(clienteRepository, times(1)).findAll();
    }

    @Test
    public void testSaveObject() {
        ClienteDTO clienteDTO = new ClienteDTO();
        clienteDTO.setNome("John");
        clienteDTO.setCPF("123456789");
        clienteDTO.setEndereco("123 Main St");
        clienteDTO.setDataNasc("1990-01-01");

        ClienteEntity savedClienteEntity = new ClienteEntity();
        savedClienteEntity.setID_Cliente(1L);
        savedClienteEntity.setNome(clienteDTO.getNome());
        savedClienteEntity.setCPF(clienteDTO.getCPF());
        savedClienteEntity.setEndereco(clienteDTO.getEndereco());
        savedClienteEntity.setDataNasc(clienteDTO.getDataNasc());

        when(clienteRepository.save(any(ClienteEntity.class))).thenReturn(savedClienteEntity);

        clienteService.saveObject(clienteDTO);

        verify(clienteRepository, times(1)).save(any(ClienteEntity.class));
    }

    @Test
    public void testUpdate() {
        long id = 1L;
        ClienteDTO clienteDTO = new ClienteDTO();
        clienteDTO.setNome("John");
        clienteDTO.setCPF("123456789");
        clienteDTO.setEndereco("123 Main St");
        clienteDTO.setDataNasc("1990-01-01");

        ClienteEntity clienteEntity = new ClienteEntity();
        clienteEntity.setID_Cliente(id);

        when(clienteRepository.findById(id)).thenReturn(Optional.of(clienteEntity));
        when(clienteRepository.save(any(ClienteEntity.class))).thenReturn(clienteEntity);

        clienteService.update(id, clienteDTO);

        verify(clienteRepository, times(1)).findById(id);
        verify(clienteRepository, times(1)).save(any(ClienteEntity.class));
    }

    @Test
    public void testUpdate_ThrowsNoSuchElementException() {
        // Arrange
        long id = 1L;
        ClienteDTO clienteDTO = new ClienteDTO();
        clienteDTO.setNome("John");
        clienteDTO.setCPF("123456789");
        clienteDTO.setEndereco("123 Main St");
        clienteDTO.setDataNasc("1990-01-01");

        when(clienteRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(NoSuchElementException.class, () -> clienteService.update(id, clienteDTO));
        verify(clienteRepository, times(1)).findById(id);
        verify(clienteRepository, times(0)).save(any(ClienteEntity.class));
    }

    @Test
    public void testDelete() {
        long id = 1L;

        clienteService.delete(id);

        verify(clienteRepository, times(1)).deleteById(id);
    }
}

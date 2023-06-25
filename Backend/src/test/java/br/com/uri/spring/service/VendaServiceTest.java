package br.com.uri.spring.service;

import br.com.uri.spring.dto.VendaDTO;
import br.com.uri.spring.entities.ClienteEntity;
import br.com.uri.spring.entities.ProdutoEntity;
import br.com.uri.spring.entities.VendaEntity;
import br.com.uri.spring.repositories.ClienteRepository;
import br.com.uri.spring.repositories.ProdutoRepository;
import br.com.uri.spring.repositories.VendaRepository;
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

public class VendaServiceTest {

    @Mock
    private ClienteRepository clienteRepository;

    @Mock
    private ProdutoRepository produtoRepository;

    @Mock
    private VendaRepository vendaRepository;

    @InjectMocks
    private VendaService vendaService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetOneObject() {
        long id = 1L;
        VendaEntity vendaEntity = new VendaEntity();
        vendaEntity.setID_Venda(id);

        when(vendaRepository.findById(id)).thenReturn(Optional.of(vendaEntity));

        VendaEntity result = vendaService.getOneObject(id);

        assertNotNull(result);
        assertEquals(id, result.getID_Venda());
        verify(vendaRepository, times(1)).findById(id);
    }

    @Test
    public void testGetOneObject_ThrowsNoSuchElementException() {
        long id = 1L;

        when(vendaRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(NoSuchElementException.class, () -> vendaService.getOneObject(id));
        verify(vendaRepository, times(1)).findById(id);
    }

    @Test
    public void testGetAllObjects() {
        List<VendaEntity> vendaEntities = new ArrayList<>();
        vendaEntities.add(new VendaEntity());
        vendaEntities.add(new VendaEntity());

        when(vendaRepository.findAll()).thenReturn(vendaEntities);

        List<VendaEntity> results = vendaService.getAllObjects();

        assertNotNull(results);
        assertEquals(vendaEntities.size(), results.size());
        verify(vendaRepository, times(1)).findAll();
    }

    @Test
    public void testSaveObject() {
        VendaDTO vendaDTO = new VendaDTO();
        vendaDTO.setID_Cliente(1L);
        vendaDTO.setCodigoDeBarras(123L);
        vendaDTO.setQuantidade(2L);
        vendaDTO.setPrecoUnit(9.99f);

        ClienteEntity clienteEntity = new ClienteEntity();
        clienteEntity.setID_Cliente(vendaDTO.getID_Cliente());

        when(clienteRepository.findById(vendaDTO.getID_Cliente())).thenReturn(Optional.of(clienteEntity));

        ProdutoEntity produtoEntity = new ProdutoEntity();
        produtoEntity.setCodigoDeBarras(vendaDTO.getCodigoDeBarras());

        when(produtoRepository.findById(vendaDTO.getCodigoDeBarras())).thenReturn(Optional.of(produtoEntity));

        VendaEntity savedVendaEntity = new VendaEntity();
        savedVendaEntity.setID_Venda(1L);

        when(vendaRepository.save(any(VendaEntity.class))).thenReturn(savedVendaEntity);

        vendaService.saveObject(vendaDTO);

        verify(clienteRepository, times(1)).findById(vendaDTO.getID_Cliente());
        verify(produtoRepository, times(1)).findById(vendaDTO.getCodigoDeBarras());
        verify(vendaRepository, times(1)).save(any(VendaEntity.class));
    }
}

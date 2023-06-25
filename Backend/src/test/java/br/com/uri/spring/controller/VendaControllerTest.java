package br.com.uri.spring.controller;

import br.com.uri.spring.dto.VendaDTO;
import br.com.uri.spring.entities.VendaEntity;
import br.com.uri.spring.service.VendaService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class VendaControllerTest {

    @Mock
    private VendaService vendaService;

    @InjectMocks
    private VendaController vendaController;

    private VendaEntity vendaEntity;
    private VendaDTO vendaDTO;

    @BeforeEach
    public void setUp() {
        vendaEntity = new VendaEntity();
        vendaEntity.setID_Venda(1L);
        vendaEntity.setPrecoUnit(100.0F);
        vendaEntity.setQuantidade(1);
        vendaEntity.setPrecoTotal(100.0F);

        vendaDTO = new VendaDTO();
        vendaDTO.setPrecoUnit(100.0F);
        vendaDTO.setQuantidade(1);
    }

    @Test
    public void testGetVendaById() {
        when(vendaService.getOneObject(1L)).thenReturn(vendaEntity);

        ResponseEntity<VendaEntity> response = vendaController.getClienteById(1L);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(vendaEntity, response.getBody());

        verify(vendaService, times(1)).getOneObject(1L);
    }

    @Test
    public void testGetAllVendas() {
        List<VendaEntity> vendas = Arrays.asList(vendaEntity, vendaEntity);
        when(vendaService.getAllObjects()).thenReturn(vendas);

        ResponseEntity<List<VendaEntity>> response = vendaController.getAllClientes();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(vendas, response.getBody());

        verify(vendaService, times(1)).getAllObjects();
    }

    @Test
    public void testPostData() {
        ResponseEntity<Void> response = vendaController.postData(vendaDTO);

        assertEquals(HttpStatus.ACCEPTED, response.getStatusCode());

        verify(vendaService, times(1)).saveObject(vendaDTO);
    }
}

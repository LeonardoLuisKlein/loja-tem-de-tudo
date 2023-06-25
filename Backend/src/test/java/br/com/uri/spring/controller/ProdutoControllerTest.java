package br.com.uri.spring.controller;

import br.com.uri.spring.dto.ProdutoDTO;
import br.com.uri.spring.entities.ProdutoEntity;
import br.com.uri.spring.service.ProdutoService;
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
public class ProdutoControllerTest {

    @Mock
    private ProdutoService produtoService;

    @InjectMocks
    private ProdutoController produtoController;

    private ProdutoEntity produtoEntity;
    private ProdutoDTO produtoDTO;

    @BeforeEach
    public void setUp() {
        produtoEntity = new ProdutoEntity();
        produtoEntity.setNomeProduto("Produto");
        produtoEntity.setDescricao("Um produto");
        produtoEntity.setPrecoUnit(10.0F);
        produtoEntity.setQuantidade(10);
        produtoEntity.setCodigoDeBarras(123);

        produtoDTO = new ProdutoDTO();
        produtoDTO.setNomeProduto("Produto");
        produtoDTO.setDescricao("Um produto");
        produtoDTO.setPrecoUnit(10.0F);
        produtoDTO.setQuantidade(10);
        produtoDTO.setCodigoDeBarras(123);
    }

    @Test
    public void testGetProdutoById() {
        when(produtoService.getOneObject(1L)).thenReturn(produtoEntity);

        ResponseEntity<ProdutoEntity> response = produtoController.getProdutoById(1L);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(produtoEntity, response.getBody());

        verify(produtoService, times(1)).getOneObject(1L);
    }

    @Test
    public void testGetAllProdutos() {
        List<ProdutoEntity> produtos = Arrays.asList(produtoEntity, produtoEntity);
        when(produtoService.getAllObjects()).thenReturn(produtos);

        ResponseEntity<List<ProdutoEntity>> response = produtoController.getAllProdutos();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(produtos, response.getBody());

        verify(produtoService, times(1)).getAllObjects();
    }

    @Test
    public void testCreateProduto() {
        ResponseEntity<Void> response = produtoController.createProduto(produtoDTO);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());

        verify(produtoService, times(1)).saveObject(produtoDTO);
    }

    @Test
    public void testUpdateProduto() {
        ResponseEntity<Void> response = produtoController.updateProduto(1L, produtoDTO);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());

        verify(produtoService, times(1)).update(1L, produtoDTO);
    }

    @Test
    public void testDeleteProduto() {
        ResponseEntity<Void> response = produtoController.deleteProduto(1L);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());

        verify(produtoService, times(1)).delete(1L);
    }
}

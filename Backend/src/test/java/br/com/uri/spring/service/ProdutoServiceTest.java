package br.com.uri.spring.service;

import br.com.uri.spring.dto.ProdutoDTO;
import br.com.uri.spring.entities.ProdutoEntity;
import br.com.uri.spring.repositories.ProdutoRepository;
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

public class ProdutoServiceTest {

    @Mock
    private ProdutoRepository produtoRepository;

    @InjectMocks
    private ProdutoService produtoService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetOneObject() {
       long id = 1L;
        ProdutoEntity produtoEntity = new ProdutoEntity();
        produtoEntity.setCodigoDeBarras(id);

        when(produtoRepository.findById(id)).thenReturn(Optional.of(produtoEntity));

        ProdutoEntity result = produtoService.getOneObject(id);

        assertNotNull(result);
        assertEquals(id, result.getCodigoDeBarras());
        verify(produtoRepository, times(1)).findById(id);
    }

    @Test
    public void testGetOneObject_ThrowsNoSuchElementException() {
        long id = 1L;

        when(produtoRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(NoSuchElementException.class, () -> produtoService.getOneObject(id));
        verify(produtoRepository, times(1)).findById(id);
    }

    @Test
    public void testGetAllObjects() {
       List<ProdutoEntity> produtoEntities = new ArrayList<>();
        produtoEntities.add(new ProdutoEntity());
        produtoEntities.add(new ProdutoEntity());

        when(produtoRepository.findAll()).thenReturn(produtoEntities);

        List<ProdutoEntity> results = produtoService.getAllObjects();

        assertNotNull(results);
        assertEquals(produtoEntities.size(), results.size());
        verify(produtoRepository, times(1)).findAll();
    }

    @Test
    public void testSaveObject() {
        ProdutoDTO produtoDTO = new ProdutoDTO();
        produtoDTO.setCodigoDeBarras(123L);
        produtoDTO.setNomeProduto("Produto");
        produtoDTO.setDescricao("Um produto");
        produtoDTO.setQuantidade(10L);
        produtoDTO.setPrecoUnit(9.99f);

        ProdutoEntity savedProdutoEntity = new ProdutoEntity();
        savedProdutoEntity.setCodigoDeBarras(produtoDTO.getCodigoDeBarras());
        savedProdutoEntity.setNomeProduto(produtoDTO.getNomeProduto());
        savedProdutoEntity.setDescricao(produtoDTO.getDescricao());
        savedProdutoEntity.setQuantidade(produtoDTO.getQuantidade());
        savedProdutoEntity.setPrecoUnit(produtoDTO.getPrecoUnit());

        when(produtoRepository.save(any(ProdutoEntity.class))).thenReturn(savedProdutoEntity);

        produtoService.saveObject(produtoDTO);

        verify(produtoRepository, times(1)).save(any(ProdutoEntity.class));
    }

    @Test
    public void testUpdate() {
        long id = 1L;
        ProdutoDTO produtoDTO = new ProdutoDTO();
        produtoDTO.setCodigoDeBarras(123L);
        produtoDTO.setNomeProduto("Produto");
        produtoDTO.setDescricao("Um produto");
        produtoDTO.setQuantidade(10L);
        produtoDTO.setPrecoUnit(9.99f);

        ProdutoEntity produtoEntity = new ProdutoEntity();
        produtoEntity.setCodigoDeBarras(id);

        when(produtoRepository.findById(id)).thenReturn(Optional.of(produtoEntity));
        when(produtoRepository.save(any(ProdutoEntity.class))).thenReturn(produtoEntity);

        produtoService.update(id, produtoDTO);

        verify(produtoRepository, times(1)).findById(id);
        verify(produtoRepository, times(1)).save(any(ProdutoEntity.class));
    }

    @Test
    public void testUpdate_ThrowsNoSuchElementException() {
        long id = 1L;
        ProdutoDTO produtoDTO = new ProdutoDTO();
        produtoDTO.setCodigoDeBarras(123L);
        produtoDTO.setNomeProduto("Produto");
        produtoDTO.setDescricao("Um produto");
        produtoDTO.setQuantidade(10L);
        produtoDTO.setPrecoUnit(9.99f);

        when(produtoRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(NoSuchElementException.class, () -> produtoService.update(id, produtoDTO));
        verify(produtoRepository, times(1)).findById(id);
        verify(produtoRepository, times(0)).save(any(ProdutoEntity.class));
    }

    @Test
    public void testDelete() {
        long id = 1L;

        produtoService.delete(id);

        verify(produtoRepository, times(1)).deleteById(id);
    }
}
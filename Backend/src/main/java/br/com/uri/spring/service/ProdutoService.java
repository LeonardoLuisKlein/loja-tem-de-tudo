package br.com.uri.spring.service;

import br.com.uri.spring.dto.ClienteDTO;
import br.com.uri.spring.dto.ProdutoDTO;
import br.com.uri.spring.entities.ClienteEntity;
import br.com.uri.spring.entities.ProdutoEntity;
import br.com.uri.spring.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ProdutoService {
    private ProdutoRepository produtoRepository;

    @Autowired
    public ProdutoService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    public ProdutoEntity getOneObject(Long id) {
        return produtoRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Cliente não encontrado"));
    }

    public List<ProdutoEntity> getAllObjects() {
        return produtoRepository.findAll();
    }
    public void saveObject (ProdutoDTO produtoDTO){
        ProdutoEntity produtoEntity = new ProdutoEntity();

        produtoEntity.setCodigoDeBarras(produtoDTO.getCodigoDeBarras());
        produtoEntity.setNomeProduto(produtoDTO.getNomeProduto());
        produtoEntity.setDescricao(produtoDTO.getDescricao());
        produtoEntity.setQuantidade(produtoDTO.getQuantidade());
        produtoEntity.setPrecoUnit(produtoDTO.getPrecoUnit());

        produtoRepository.save(produtoEntity);
    }

    public void update(Long id, ProdutoDTO produtoDTO) {
        ProdutoEntity produtoEntity = produtoRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Produto não encontrado"));

        produtoEntity.setCodigoDeBarras(produtoDTO.getCodigoDeBarras());
        produtoEntity.setNomeProduto(produtoDTO.getNomeProduto());
        produtoEntity.setDescricao(produtoDTO.getDescricao());
        produtoEntity.setQuantidade(produtoDTO.getQuantidade());
        produtoEntity.setPrecoUnit(produtoDTO.getPrecoUnit());

        produtoRepository.save(produtoEntity);
    }
    public void delete(Long id) {
        produtoRepository.deleteById(id);
    }
}

package br.com.uri.spring.service;

import br.com.uri.spring.dto.ProdutoDTO;
import br.com.uri.spring.entities.ProdutoEntity;
import br.com.uri.spring.repositories.ProdutoRepository;
import org.springframework.stereotype.Service;

@Service
public class ProdutoService {
    private ProdutoRepository produtoRepository;

    public void saveObject (ProdutoDTO produtoDTO){
        ProdutoEntity produtoEntity = new ProdutoEntity();

        produtoEntity.setCodigoDeBarras(produtoDTO.getCodigoDeBarras());
        produtoEntity.setNomeProduto(produtoDTO.getNomeProduto());
        produtoEntity.setDescricao(produtoDTO.getDescricao());
        produtoEntity.setQuantidade(produtoDTO.getQuantidade());
        produtoEntity.setPrecoUnit(produtoDTO.getPrecoUnit());

        produtoRepository.save(produtoEntity);
    }
}

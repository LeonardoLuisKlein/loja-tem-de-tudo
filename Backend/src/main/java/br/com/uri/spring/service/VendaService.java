package br.com.uri.spring.service;

import br.com.uri.spring.dto.ProdutoDTO;
import br.com.uri.spring.dto.VendaDTO;
import br.com.uri.spring.entities.ClienteEntity;
import br.com.uri.spring.entities.ProdutoEntity;
import br.com.uri.spring.entities.VendaEntity;
import br.com.uri.spring.repositories.ClienteRepository;
import br.com.uri.spring.repositories.ProdutoRepository;
import br.com.uri.spring.repositories.VendaRepository;
import org.springframework.stereotype.Service;

@Service
public class VendaService {
    private ClienteRepository clienteRepository;

    private VendaRepository vendaRepository;

    private ProdutoRepository produtoRepository;

    public VendaService(ClienteRepository clienteRepository, ProdutoRepository produtoRepository){
        this.clienteRepository = clienteRepository;
        this.produtoRepository = produtoRepository;
    }
    public void saveObject(VendaDTO vendaDTO){
        VendaEntity vendaEntity = new VendaEntity();

        ClienteEntity clienteEntity = clienteRepository.findById(vendaDTO.getID_Cliente()).orElseThrow(() -> new IllegalArgumentException("Pessoa não encontrada"));;

        vendaEntity.setClienteEntity(clienteEntity);

        ProdutoEntity produtoEntity = produtoRepository.findById(vendaDTO.getCodigoDeBarras()).orElseThrow(() -> new IllegalArgumentException("Produto não encontrado"));;

        vendaEntity.setProdutoEntity(produtoEntity);

        vendaEntity.setQuantidade(vendaDTO.getQuantidade());
        vendaEntity.setPrecoUnit(vendaDTO.getPrecoUnit());
        vendaEntity.setPrecoTotal(vendaDTO.getQuantidade() * vendaDTO.getPrecoUnit());

        vendaRepository.save(vendaEntity);
    }
}

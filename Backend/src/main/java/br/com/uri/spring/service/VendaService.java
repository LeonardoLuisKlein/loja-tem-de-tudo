package br.com.uri.spring.service;

import br.com.uri.spring.dto.VendaDTO;
import br.com.uri.spring.entities.ClienteEntity;
import br.com.uri.spring.entities.ProdutoEntity;
import br.com.uri.spring.entities.VendaEntity;
import br.com.uri.spring.repositories.ClienteRepository;
import br.com.uri.spring.repositories.ProdutoRepository;
import br.com.uri.spring.repositories.VendaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class VendaService {
    private final ClienteRepository clienteRepository;
    private final ProdutoRepository produtoRepository;
    private final VendaRepository vendaRepository;

    public VendaService(ClienteRepository clienteRepository, ProdutoRepository produtoRepository, VendaRepository vendaRepository) {
        this.clienteRepository = clienteRepository;
        this.produtoRepository = produtoRepository;
        this.vendaRepository = vendaRepository;
    }

    public VendaEntity getOneObject(Long id) {
        return vendaRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Produto não encontrado"));
    }

    public List<VendaEntity> getAllObjects() {
        return vendaRepository.findAll();
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

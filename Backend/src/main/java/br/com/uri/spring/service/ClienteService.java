package br.com.uri.spring.service;

import br.com.uri.spring.dto.ClienteDTO;
import br.com.uri.spring.entities.ClienteEntity;
import br.com.uri.spring.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ClienteService {
    private ClienteRepository clienteRepository;

    @Autowired
    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    public ClienteEntity getOneObject(Long id) {
        return clienteRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Cliente não encontrado"));
    }

    public List<ClienteEntity> getAllObjects() {
        return clienteRepository.findAll();
    }

    public void saveObject (ClienteDTO clienteDTO){
        ClienteEntity clienteEntity = new ClienteEntity();

        clienteEntity.setNome(clienteDTO.getNome());
        clienteEntity.setCPF(clienteDTO.getCPF());
        clienteEntity.setEndereco(clienteDTO.getEndereco());
        clienteEntity.setDataNasc(clienteDTO.getDataNasc());

        clienteRepository.save(clienteEntity);
    }

    public void update(Long id, ClienteDTO clienteDTO) {
        ClienteEntity clienteEntity = clienteRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Cliente não encontrado"));

        clienteEntity.setNome(clienteDTO.getNome());
        clienteEntity.setCPF(clienteDTO.getCPF());
        clienteEntity.setEndereco(clienteDTO.getEndereco());
        clienteEntity.setDataNasc(clienteDTO.getDataNasc());

        clienteRepository.save(clienteEntity);
    }

    public void delete(Long id) {
        clienteRepository.deleteById(id);
    }
}

package br.com.uri.spring.service;

import br.com.uri.spring.dto.ClienteDTO;
import br.com.uri.spring.entities.ClienteEntity;
import br.com.uri.spring.repositories.ClienteRepository;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {
    private ClienteRepository clienteRepository;

    public void saveObject (ClienteDTO clienteDTO){
        ClienteEntity clienteEntity = new ClienteEntity();

        clienteEntity.setNome(clienteDTO.getNome());
        clienteEntity.setCPF(clienteDTO.getCPF());
        clienteEntity.setEndereco(clienteDTO.getEndereco());
        clienteEntity.setDataNasc(clienteDTO.getDataNasc());

        clienteRepository.save(clienteEntity);
    }
}

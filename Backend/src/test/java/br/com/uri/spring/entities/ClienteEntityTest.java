package br.com.uri.spring.entities;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ClienteEntityTest {

    @Test
    public void testGettersAndSetters() {
        long ID_Cliente = 1;
        String nome = "John Doe";
        String cpf = "123.456.789-00";
        String dataNasc = "2000-01-01";
        String endereco = "123 Main St";

        ClienteEntity clienteEntity = new ClienteEntity();
        clienteEntity.setID_Cliente(ID_Cliente);
        clienteEntity.setNome(nome);
        clienteEntity.setCPF(cpf);
        clienteEntity.setDataNasc(dataNasc);
        clienteEntity.setEndereco(endereco);

        assertEquals(1L, clienteEntity.getID_Cliente());
        assertEquals("John Doe", clienteEntity.getNome());
        assertEquals("123.456.789-00", clienteEntity.getCPF());
        assertEquals("2000-01-01", clienteEntity.getDataNasc());
        assertEquals("123 Main St", clienteEntity.getEndereco());
    }

}
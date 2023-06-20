package br.com.uri.spring.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "cliente")
public class ClienteEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long ID_Cliente;

    @Column
    private String Nome;

    @Column
    private String CPF;

    @Column
    private String DataNasc;

    @Column
    private String Endereco;
}

package br.com.uri.spring.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "produto")
@Data
public class ProdutoEntity {

    @Id
    private long CodigoDeBarras;

    @Column
    private String NomeProduto;

    @Column
    private String Descricao;

    @Column
    private long Quantidade;

    @Column
    private float PrecoUnit;
}

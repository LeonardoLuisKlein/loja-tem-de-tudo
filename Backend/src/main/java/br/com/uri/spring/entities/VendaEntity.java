package br.com.uri.spring.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Table(name = "venda")
@Entity
public class VendaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long ID_Venda;

    @ManyToOne
    @JoinColumn(name = "ID_Cliente")
    private ClienteEntity ClienteEntity;

    @ManyToOne
    @JoinColumn(name = "CodigoDeBarras")
    private ProdutoEntity ProdutoEntity;

    @Column
    private long Quantidade;

    @Column
    private float PrecoUnit;

    @Column
    private float PrecoTotal;
}

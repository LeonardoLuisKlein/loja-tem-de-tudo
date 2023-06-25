package br.com.uri.spring.entities;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class ProdutoEntityTest {

    @Test
    public void testGetterAndSetter() {
        ProdutoEntity produto = new ProdutoEntity();

        long codigoDeBarras = 123;
        String nomeProduto = "Produto Teste";
        String descricao = "Descrição do Produto Teste";
        long quantidade = 10;
        float precoUnit = 9.99f;

        produto.setCodigoDeBarras(codigoDeBarras);
        produto.setNomeProduto(nomeProduto);
        produto.setDescricao(descricao);
        produto.setQuantidade(quantidade);
        produto.setPrecoUnit(precoUnit);

        Assertions.assertEquals(codigoDeBarras, produto.getCodigoDeBarras());
        Assertions.assertEquals(nomeProduto, produto.getNomeProduto());
        Assertions.assertEquals(descricao, produto.getDescricao());
        Assertions.assertEquals(quantidade, produto.getQuantidade());
        Assertions.assertEquals(precoUnit, produto.getPrecoUnit(), 0.001);
    }

}

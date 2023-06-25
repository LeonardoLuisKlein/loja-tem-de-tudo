package br.com.uri.spring.entities;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class VendaEntityTest {

    @Test
    public void testGetterAndSetter() {
        VendaEntity venda = new VendaEntity();

        ClienteEntity cliente = new ClienteEntity();
        ProdutoEntity produto = new ProdutoEntity();

        long idVenda = 1L;
        long quantidade = 5;
        float precoUnit = 10.99f;
        float precoTotal = quantidade * precoUnit;

        venda.setID_Venda(idVenda);
        venda.setClienteEntity(cliente);
        venda.setProdutoEntity(produto);
        venda.setQuantidade(quantidade);
        venda.setPrecoUnit(precoUnit);
        venda.setPrecoTotal(precoTotal);

        Assertions.assertEquals(idVenda, venda.getID_Venda());
        Assertions.assertEquals(cliente, venda.getClienteEntity());
        Assertions.assertEquals(produto, venda.getProdutoEntity());
        Assertions.assertEquals(quantidade, venda.getQuantidade());
        Assertions.assertEquals(precoUnit, venda.getPrecoUnit(), 0.001);
        Assertions.assertEquals(precoTotal, venda.getPrecoTotal(), 0.001);
    }

}

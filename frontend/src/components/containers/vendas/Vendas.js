import React, { useState, useEffect } from "react";
import axios from 'axios';
import { AiOutlinePlus } from 'react-icons/ai';
import './Vendas.scss';

import { Inputs } from "../../micro/inputs/Inputs";

export const Vendas = () => {
  const [idCliente, setIdCliente] = useState('');
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [codigoDeBarras, setCodigoDeBarras] = useState('');
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [quantidade, setQuantidade] = useState('');
  const [precoUnit, setPrecoUnit] = useState('');
  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [vendas, setVendas] = useState([]);

  const fetchData = async () => {
    try {
      const clientesResponse = await axios.get("http://localhost:8080/v1/clientes");
      const clientesData = clientesResponse.data; // Dados dos clientes retornados pelo backend

      const produtosResponse = await axios.get("http://localhost:8080/v1/produtos");
      const produtosData = produtosResponse.data; // Dados dos produtos retornados pelo backend

      const vendasResponse = await axios.get("http://localhost:8080/v1/vendas");
      const vendasData = vendasResponse.data; // Dados das vendas retornados pelo backend

      setClientes(clientesData); // Atualiza o estado global com os dados dos clientes
      setProdutos(produtosData);
      setVendas(vendasData); // Atualiza o estado global com os dados das vendas

      console.log(clientesData); // Exibe os dados dos clientes no console ou realiza outras operações necessárias
      console.log(produtosData);
      console.log(vendasData); // Exibe os dados das vendas no console ou realiza outras operações necessárias
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleIdClienteChange = (value) => {
    setIdCliente(value);
    const cliente = clientes.find((c) => c.id_Cliente === parseInt(value));
    setClienteSelecionado(cliente);
  };

  useEffect(() => {
    if (clienteSelecionado) {
      setCodigoDeBarras('');
      setQuantidade('');
      setPrecoUnit('');
      setProdutoSelecionado(null);
    }
  }, [clienteSelecionado]);

  const handleCodigoDeBarrasChange = (value) => {
    setCodigoDeBarras(value);
    const produto = produtos.find((p) => p.codigoDeBarras === parseInt(value));
    if (produto) {
      setPrecoUnit(produto.precoUnit.toString());
      setProdutoSelecionado(produto);
    } else {
      setPrecoUnit('');
      setProdutoSelecionado(null);
    }
  };

  const handleQuantidadeChange = (value) => {
    setQuantidade(value);
  };

  const handlePrecoUnitChange = (value) => {
    setPrecoUnit(value);
  }

  const calcularPrecoTotal = () => {
    if (produtoSelecionado && quantidade) {
      const precoTotal = parseFloat(produtoSelecionado.precoUnit) * parseInt(quantidade);
      return precoTotal.toFixed(2);
    }
    return '';
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const novaVenda = {
      id_Cliente: idCliente,
      codigoDeBarras,
      quantidade,
      precoUnit: produtoSelecionado ? produtoSelecionado.precoUnit : '',
    };
    try {
      const response = await axios.post("http://localhost:8080/v1/vendas", novaVenda);
      console.log(response.data);
      setVendas([...vendas, response.data]);
      window.alert("Dados enviados com sucesso");
      fetchData();
    } catch (error) {
      window.alert('Erro ao enviar dados para o backend:', error);
    }

    setIdCliente("")
    setCodigoDeBarras("")
    setQuantidade("")
    setPrecoUnit("")
  };

  const getClienteById = (id) => {
    return clientes.find((cliente) => cliente.id_Cliente === id);
  };

  const getProdutoByCodigoDeBarras = (codigoDeBarras) => {
    return produtos.find((produto) => produto.codigoDeBarras === codigoDeBarras);
  };

  return (
    <div id="clientesForm">
      <h1>Vendas</h1>
      <div id="wrapFormCli">
        <form id="formPrincipal">
          <div id="inputsContainer">
            <Inputs
              labelText="ID Cliente"
              inputType="number"
              inputId="bigInput"
              placehInput="ID Cliente"
              containerType="bigContainer"
              value={idCliente}
              onChange={handleIdClienteChange}
            />
            <Inputs
              labelText="Nome do Cliente"
              inputType="text"
              inputId="bigInput"
              placehInput="Nome do Cliente"
              containerType="bigContainer"
              readOnly
              value={clienteSelecionado ? clienteSelecionado.nome : ''}
            />
            <Inputs
              labelText="Código de Barras"
              inputType="number"
              inputId="bigInput"
              placehInput="Código de Barras"
              containerType="bigContainer"
              value={codigoDeBarras}
              onChange={handleCodigoDeBarrasChange}
            />
            <Inputs
              labelText="Nome do Produto"
              inputType="text"
              inputId="bigInput"
              placehInput="Nome do Produto"
              containerType="bigContainer"
              readOnly
              value={produtoSelecionado ? produtoSelecionado.nomeProduto : ''}
            />
            <Inputs
              labelText="Preço Unitário"
              inputType="text"
              inputId="bigInput"
              placehInput="Preço Unitário"
              containerType="bigContainer"
              readOnly
              value={precoUnit}
              onChange={handlePrecoUnitChange}
            />
            <Inputs
              labelText="Quantidade"
              inputType="text"
              inputId="bigInput"
              placehInput="Quantidade"
              containerType="bigContainer"
              value={quantidade}
              onChange={handleQuantidadeChange}
            />
            <Inputs
              labelText="Preço Total"
              inputType="text"
              inputId="bigInput"
              placehInput="Preço Total"
              containerType="bigContainer"
              readOnly
              value={calcularPrecoTotal()}
            />
          </div>
          <button id="botaoCliente" onClick={handleFormSubmit}>
            Adicionar <AiOutlinePlus />
          </button>
        </form>
        <section id="tabelansky">
          <div id="clienteTableUp">
            <p>Id venda</p>
            <p>Cliente</p>
            <p>Produto</p>
            <p>Quantidade</p>
            <p>Preço total</p>
          </div>
          {vendas.map((venda) => {
  const cliente = venda.clienteEntity;
  const produto = venda.produtoEntity;
  return (
    <div key={venda.id_Venda} id="clienteTableDown">
      <p>{venda.id_Venda}</p>
      <p>{cliente ? cliente.nome : ''}</p>
      <p>{produto ? produto.nomeProduto : ''}</p>
      <p>{venda.quantidade}</p>
      <p>R$ {venda.precoTotal}</p>
    </div>
  );
})}
        </section>
      </div>
    </div>
  );
};
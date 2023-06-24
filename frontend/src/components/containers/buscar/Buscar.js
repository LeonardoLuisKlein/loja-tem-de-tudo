import React, { useState } from "react";
import axios from 'axios';

export const Buscar = () => {
  const [produtoId, setProdutoId] = useState("");
  const [produto, setProduto] = useState(null);
  const [clienteId, setClienteId] = useState("");
  const [cliente, setCliente] = useState(null);

  const handleProdutoIdChange = (event) => {
    setProdutoId(event.target.value);
  };

  const handleClienteIdChange = (event) => {
    setProdutoId(event.target.value);
  };

  const handleBuscarProduto = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8080/v1/produtos/${produtoId}`);
      const produtoData = response.data;
      setProduto(produtoData);
    } catch (error) {
      console.error(error);
      setProduto(null);
    }
  };

  const handleBuscarCliente = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8080/v1/clientes/${clienteId}`);
      const clienteData = response.data;
      setCliente(clienteData);
    } catch (error) {
      console.error(error);
      setCliente(null);
    }
  };

  return (
    <div>
      <h1>Buscar registros da Loja</h1>
      <div id="buscarProdutos">
      <section>
        <label htmlFor="produtoId">Código de barras do Produto:</label>
        <input
          type="text"
          id="produtoId"
          value={produtoId}
          onChange={handleProdutoIdChange}
        />
        <button onClick={handleBuscarProduto}>Buscar</button>
      </section>
      </div>
      <div id="buscarClientes">
      <section>
        <label htmlFor="clienteId">ID do Cliente:</label>
        <input
          type="text"
          id="clienteId"
          value={clienteId}
          onChange={handleClienteIdChange}
        />
         <button onClick={handleBuscarCliente}>Buscar</button>
      </section>
      {cliente && (
        <div>
          <h2>Informações do Cliente:</h2>
          <p>Nome: {cliente.nomeCliente}</p>
          <p>Endereco: {cliente.endereco}</p>
          <p>Data de Nascimento: {cliente.dataNasc}</p>
        </div>
      )}
      {produto && (
        <div>
          <h2>Informações do Produto:</h2>
          <p>Nome do Produto: {produto.nomeProduto}</p>
          <p>Quantidade: {produto.quantidade}</p>
          <p>Descrição: {produto.descricao}</p>
          <p>Preço Unitário: {produto.precoUnit}</p>
        </div>
      )}
      </div>
    </div>
  );
};

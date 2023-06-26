import React, { useState } from "react";
import axios from 'axios';
import "./Buscar.scss"

export const Buscar = () => {
  const [produtoId, setProdutoId] = useState("");
  const [produto, setProduto] = useState(null);
  const [clienteId, setClienteId] = useState("");
  const [cliente, setCliente] = useState(null);
  const [vendaId, setVendaId] = useState("");
  const [venda, setVenda] = useState(null);

  const handleProdutoIdChange = (event) => {
    setProdutoId(event.target.value);
  };

  const handleClienteIdChange = (event) => {
    setClienteId(event.target.value);
  };

  const handleVendaIdChange = (event) => {
    setVendaId(event.target.value);
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

  const handleBuscarVenda = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8080/v1/vendas/${vendaId}`);
      const vendaData = response.data;
      setVenda(vendaData);
    } catch (error) {
      console.error(error);
      setVenda(null);
    }
  };

  return (
    <div id="buscarForm">
      <h1>Buscar registros da Loja</h1>
      <div className="buscarItens">
        <div className="wrapBusca">
          <label htmlFor="produtoId" className="labelBasic">Código de barras do Produto:</label>
          <input
            type="text"
            id="produtoId"
            value={produtoId}
            onChange={handleProdutoIdChange}
            className="inputBasic"
          />
          <button onClick={handleBuscarProduto}>Buscar</button>
        </div>
        {produto && (
          <div className="cardBuscar">
            <h2>Informações do Produto:</h2>
            <p>Nome do Produto: {produto.nomeProduto}</p>
            <p>Quantidade: {produto.quantidade}</p>
            <p>Descrição: {produto.descricao}</p>
            <p>Preço Unitário: {produto.precoUnit}</p>
          </div>
        )}
      </div>
      <div className="buscarItens">
        <div className="wrapBusca">
          <label htmlFor="clienteId" className="labelBasic">ID do Cliente:</label>
          <input
            type="text"
            id="clienteId"
            value={clienteId}
            onChange={handleClienteIdChange}
            className="inputBasic"
          />
          <button onClick={handleBuscarCliente}>Buscar</button>
        </div>
        {cliente && (
          <div className="cardBuscar">
            <h2>Informações do Cliente:</h2>
            <p>Nome: {cliente.nome}</p>
            <p>Endereco: {cliente.endereco}</p>
            <p>Data de Nascimento: {cliente.dataNasc}</p>
          </div>
        )}
        </div>
        <div className="buscarItens">
        <div className="wrapBusca">
          <label htmlFor="vendaId" className="labelBasic">ID da venda:</label>
          <input
            type="text"
            id="vendaId"
            value={vendaId}
            onChange={handleVendaIdChange}
            className="inputBasic"
          />
          <button onClick={handleBuscarVenda}>Buscar</button>
        </div>
        {venda && (
          <div className="cardBuscar">
            <h2>Informações da Venda:</h2>
            <p>ID da Venda: {venda.id_Venda}</p>
            <p>Preço Total: {venda.precoTotal}</p>
            <p>Preço Unitário: {venda.precoUnit}</p>
          </div>
        )}
      </div>
    </div>
  );
};
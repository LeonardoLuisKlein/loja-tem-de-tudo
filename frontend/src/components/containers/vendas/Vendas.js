import React, { useState, useEffect } from "react";
import axios from 'axios';
import { AiOutlinePlus} from 'react-icons/ai';
import './Vendas.scss';

import { Inputs } from "../../micro/inputs/Inputs";

export const Vendas = () => {
  const [idCliente, setIdCliente] = useState('');
  const [codigoDeBarras, setCodigoDeBarras] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [precoUnit, setPrecoUnit] = useState('');
  const [clientes, setClientes] = useState('');
  const [produtos, setProdutos] = useState('');
  const [vendas, setVendas] = useState('');

  const fetchData = async () => {
    try {
      const clientesResponse = await axios.get("http://localhost:8080/v1/clientes");
      const clientesData = clientesResponse.data; // Dados dos clientes retornados pelo backend
  
      const produtosResponse = await axios.get("http://localhost:8080/v1/produtos");
      const produtosData = produtosResponse.data; // Dados dos produtos retornados pelo backend
  
      const vendasResponse = await axios.get("http://localhost:8080/v1/vendas");
      const vendasData = produtosResponse.data; // Dados dos produtos retornados pelo backend

      setClientes(clientesData); // Atualiza o estado global com os dados dos clientes
      setProdutos(produtosData);
      setVendas(vendasData) // Atualiza o estado global com os dados dos produtos
  
      console.log(clientesData); // Exibe os dados dos clientes no console ou realiza outras operações necessárias
      console.log(produtosData);
      console.log(vendasData) // Exibe os dados dos produtos no console ou realiza outras operações necessárias
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleIdClienteChange = (value) => {
    setIdCliente(value);
  };

  const handleCodigoDeBarrasChange = (value) => {
    setCodigoDeBarras(value);
  };

  const handleQuantidadeChange = (value) => {
    setQuantidade(value);
  };

  const handlePrecoUnitChange = (value) => {
    setPrecoUnit(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const novaVenda = {
      id_Cliente: idCliente,
      codigoDeBarras,
      quantidade,
      precoUnit,
    };
      try {
        const response = await axios.post("http://localhost:8080/v1/vendas", novaVenda);
        console.log(response.data);
        setVendas([...vendas, response.data]);
        window.alert("Dados enviados com sucesso");
        // Você pode tratar a resposta do backend aqui, se necessário
      } catch (error) {
        window.alert('Erro ao enviar dados para o backend:', error);
      }
    
  }

  return (
    <div id="clientesForm">
      <h1>Vendas</h1>
      <div id="wrapFormCli">
      <form id="formPrincipal">
      <div id="inputsContainer">
        <Inputs
            labelText="Id Cliente"
            inputType="number"
            inputId="bigInput"
            placehInput="Id Cliente"
            containerType="bigContainer"
            value={idCliente}
            onChange={handleIdClienteChange}
          />
          <Inputs
            labelText="Codigo"
            inputType="number"
            inputId="bigInput"
            placehInput="Codigo"
            containerType="bigContainer"
            value={codigoDeBarras}
            onChange={handleCodigoDeBarrasChange}
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
            labelText="Preco Unit"
            inputType="text"
            inputId="bigInput"
            placehInput="Preco"
            containerType="bigContainer"
            value={precoUnit}
            onChange={handlePrecoUnitChange}
          />
        </div>
        <button id="botaoCliente" onClick={handleFormSubmit}>Adicionar <AiOutlinePlus/></button>
      </form>
      <section id="tabelansky">
        <div id="clienteTableUp">
          <p>Id</p>
          <p>Cliente</p>
          <p>Produto</p>
          <p>Quantidade</p>
          <p>Preço total</p>
        </div>
        {/* {vendas.map((venda) => (
            <div key={vendas.id_Venda} id="clienteTableDown">
              <p>{vendas.id_Venda}</p>
              <p>{vendas.nomeProduto}</p>
              <p>{vendas.nomeCliente}</p>
            </div>
          ))} */}
      </section>
      </div>
    </div>
  )
}

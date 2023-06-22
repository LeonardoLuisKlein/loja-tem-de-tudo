import React, { useState } from "react";
import axios from 'axios';
import { AiOutlinePlus, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import './Clientes.scss'

import { Inputs } from "../../micro/inputs/Inputs";

export const Clientes = () => {
  const [nome, setName] = useState('');
  const [endereco, setEndereco] = useState('');
  const [CPF, setCPF] = useState('');
  const [dataNasc, setDatana] = useState('');
  const [clientes, setClientes] = useState([]);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEndereco, setIsValidEndereco] = useState(true);
  const [isValidCPF, setIsValidCPF] = useState(true);

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleEnderecoChange = (value) => {
    setEndereco(value);
  };

  const handleCPFChange = (value) => {
    setCPF(value);
  };

  const handleDataNaChange = (value) => {
    setDatana(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const nomeRegex = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    const isValidNomeInput = nomeRegex.test(nome);
    setIsValidName(isValidNomeInput);

    const enderecoRegex = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    const isValidEnderecoInput = enderecoRegex.test(endereco);
    setIsValidEndereco(isValidEnderecoInput);

    const CPFRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    const isValidCPFInput = CPFRegex.test(CPF);
    setIsValidCPF(isValidCPFInput);

    if (isValidNomeInput && isValidEnderecoInput && isValidCPFInput) {
      const novoCliente = {
        nome,
        endereco,
        CPF,
        dataNasc
      };

      console.log('Dados a serem enviados:', novoCliente);

      try {
        // Fazendo a solicitação POST ao backend
        const response = await axios.post('http://localhost:8080/v1/clientes', novoCliente);
        console.log(response.data); // Resposta do backend (opcional)
        setClientes([...clientes, novoCliente]);
        window.alert('Dados enviados com sucesso');
      } catch (error) {
        console.error(error);
        // Lógica para lidar com o erro da solicitação
        window.alert('Poblema');
        console.log(error.response.data);
      }
    }
  }

  // const handleEdit = (productId) => {
  //   // Lógica para lidar com a edição do produto com o ID fornecido
  //   // Pode ser exibido um modal de edição, redirecionado para uma página de edição, etc.
  //   console.log(`Editar produto com ID: ${productId}`);
  // };
  
  // const handleDelete = (productId) => {
  //   // Lógica para lidar com a exclusão do produto com o ID fornecido
  //   // Remova o produto do estado "produtos"
  //   const updatedProdutos = produtos.filter((produto) => produto.id !== productId);
  //   setProdutos(updatedProdutos);
  //   console.log(`Excluir produto com ID: ${productId}`);
  // };

  return (
    <div id="clientesForm">
      <h1>Clientes</h1>
      <div id="wrapFormCli">
      <form id="formPrincipal">
      <div id="inputsContainer">
        <Inputs
            labelText="Nome"
            inputType="text"
            inputId="bigInput"
            placehInput="Nome"
            errorMessage="Nome inválido"
            containerType="bigContainer"
            value={nome}
            onChange={handleNameChange}
            regex={/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/}
            isValid={isValidName}
          />
          <Inputs
            labelText="Endereco"
            inputType="text"
            inputId="bigInput"
            placehInput="Email"
            errorMessage="Endereco inválido"
            containerType="bigContainer"
            value={endereco}
            onChange={handleEnderecoChange} 
            regex={/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/}
            isValid={isValidEndereco}
          />
          <Inputs
            labelText="CPF"
            inputType="text"
            inputId="bigInput"
            placehInput="CPF"
            errorMessage="CPF inválido"
            containerType="bigContainer"
            value={CPF}
            onChange={handleCPFChange}
            regex={/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/}
            isValid={isValidCPF}
          />
          <Inputs
            labelText="Data Nasc"
            inputType="date"
            inputId="bigInput"
            containerType="bigContainer"
            value={dataNasc}
            onChange={handleDataNaChange}
          />
        </div>
        <button id="botaoCliente" onClick={handleFormSubmit}>Adicionar <AiOutlinePlus/></button>
      </form>
      <section id="tabelansky">
        <div id="clienteTableUp">
          <p>Nome</p>
          <p>Endereco</p>
          <p>CPF</p>
          <p>Data Nasc</p>
        </div>
        <div id="clienteTableDown">
          <p>Irineu</p>
          <p>Rua ali</p>
          <p>000.000.000-00</p>
          <p>2000/06/20</p>
          <div>
          <button className="buttonED" /*onClick={() => handleEdit(produto.id)}*/><AiFillEdit /></button>
          <button className="buttonED" /*onClick={() => handleDelete(produto.id)}*/><AiFillDelete /></button>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

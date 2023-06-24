import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlinePlus, AiFillDelete, AiFillEdit } from "react-icons/ai";
import "./Clientes.scss";

import { Inputs } from "../../micro/inputs/Inputs";

export const Clientes = () => {
  const [nome, setName] = useState("");
  const [endereco, setEndereco] = useState("");
  const [CPF, setCPF] = useState("");
  const [dataNasc, setDatana] = useState("");
  const [clientes, setClientes] = useState([]);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEndereco, setIsValidEndereco] = useState(true);
  const [isValidCPF, setIsValidCPF] = useState(true);
  const [editClientId, setEditClientId] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/v1/clientes");
      const clientesData = response.data; // Dados retornados pelo backend
      setClientes(clientesData); // Atualiza o estado global com os dados do backend
      console.log(clientesData); // Exibe os dados no console ou realiza outras operações necessárias
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

    const nomeRegex =
      /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    const isValidNomeInput = nomeRegex.test(nome);
    setIsValidName(isValidNomeInput);

    const enderecoRegex =
      /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    const isValidEnderecoInput = enderecoRegex.test(endereco);
    setIsValidEndereco(isValidEnderecoInput);

    const CPFRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    const isValidCPFInput = CPFRegex.test(CPF);
    setIsValidCPF(isValidCPFInput);

    if (isValidNomeInput && isValidEnderecoInput && isValidCPFInput) {
      const novoCliente = {
        nome,
        endereco,
        cpf: CPF,
        dataNasc,
      };

      console.log("Dados a serem enviados:", novoCliente);

      try {
        if (editClientId) {
          await axios.put(
            `http://localhost:8080/v1/clientes/${editClientId}`,
            novoCliente
          );
          const updatedClientes = clientes.map((cliente) => {
            if (cliente.id_Cliente === editClientId) {
              return { ...cliente, ...novoCliente };
            }
            return cliente;
          });
          setClientes(updatedClientes);
          window.alert("Dados atualizados com sucesso");
        } else {
          const response = await axios.post(
            "http://localhost:8080/v1/clientes",
            novoCliente
          );
          console.log(response.data);
          setClientes([...clientes, response.data]);
          window.alert("Dados enviados com sucesso");
        }
      } catch (error) {
        console.error(error);
        window.alert("Erro ao enviar dados para o backend");
        console.log(error.response.data);
      }
    }
      setName("");
      setEndereco("");
      setCPF("");
      setDatana("");
      setEditClientId(null);
  };

  const handleDeleteCliente = async (clienteId) => {
    try {
      await axios.delete(`http://localhost:8080/v1/clientes/${clienteId}`);
      const updatedClientes = clientes.filter(
        (cliente) => cliente.id_Cliente !== clienteId
      );
      setClientes(updatedClientes);
      window.alert("Sucesso ao deletar");
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error.response.data);
      }
      window.alert("Erro ao deletar");
    }
  };

  const handleEditCliente = (clienteId) => {
    const cliente = clientes.find(
      (cliente) => cliente.id_Cliente === clienteId
    );
    if (cliente) {
      setName(cliente.nome);
      setEndereco(cliente.endereco);
      setCPF(cliente.cpf);
      setDatana(cliente.dataNasc);
      setEditClientId(clienteId);
    }
  };

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
              regex={
                /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
              }
              isValid={isValidName}
            />
            <Inputs
              labelText="Endereco"
              inputType="text"
              inputId="bigInput"
              placehInput="Endereco"
              errorMessage="Endereco inválido"
              containerType="bigContainer"
              value={endereco}
              onChange={handleEnderecoChange}
              regex={
                /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
              }
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
          <button id="botaoCliente" onClick={handleFormSubmit}>
            {editClientId ? "Editar" : "Adicionar"} <AiOutlinePlus />
          </button>
        </form>
        <section id="tabelansky">
          <div id="clienteTableUp">
            <p>Id</p>
            <p>Nome</p>
            <p>Endereco</p>
            <p>Data Nasc</p>
            <p>Ações</p>
          </div>
          {clientes.map((cliente) => (
            <div key={cliente.id_Cliente} id="clienteTableDown">
              <p>{cliente.id_Cliente}</p>
              <p>{cliente.nome}</p>
              <p>{cliente.endereco}</p>
              <p>{cliente.dataNasc}</p>
              <div id="edit">
                <button
                  className="buttonED"
                  onClick={() => handleEditCliente(cliente.id_Cliente)}
                >
                  <AiFillEdit />
                </button>
                <button
                  className="buttonED"
                  onClick={() => handleDeleteCliente(cliente.id_Cliente)}
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

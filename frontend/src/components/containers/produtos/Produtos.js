import React, { useState } from "react";
import axios from 'axios';
import { AiOutlinePlus, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import './Produtos.scss'

import { Inputs } from "../../micro/inputs/Inputs";

export const Produtos = () => {
  const [name, setName] = useState('');
  const [codigo, setCodigo] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [precoUnit, setPrecoUnit] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [isValidCodigo, setIsValidCodigo] = useState(true);
  const [isValidQuantidade, setIsValidQuantidade] = useState(true);
  const [isValidDescricao, setIsValidDescricao] = useState(true);
  const [isValidPrecoUnit, setIsValidPrecoUnit] = useState(true);

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleCodigoChange = (value) => {
    setCodigo(value);
  };

  const handleQuantidadeChange = (value) => {
    setQuantidade(value);
  };

  const handleDescricaoChange = (value) => {
    setDescricao(value);
  };

  const handlePrecoUnitChange = (value) => {
    setPrecoUnit(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const nameRegex = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    const isValidNameInput = nameRegex.test(name);
    setIsValidName(isValidNameInput);

    const codigoRegex = /^(?!\s*$).+/;
    const isValidCodigoInput = codigoRegex.test(codigo);
    setIsValidCodigo(isValidCodigoInput);

    const quantidadeRegex = /^(?!\s*$).+/;
    const isValidQuantidadeInput = quantidadeRegex.test(quantidade);
    setIsValidQuantidade(isValidQuantidadeInput);

    const descricaoRegex = /^(?!\s*$).+/;
    const isValidDescricaoInput = descricaoRegex.test(descricao);
    setIsValidDescricao(isValidDescricaoInput);

    const precoUnitRegex = /^(?!\s*$).+/;
    const isValidPrecoUnitInput = precoUnitRegex.test(precoUnit);
    setIsValidPrecoUnit(isValidPrecoUnitInput);

    if (isValidNameInput && isValidCodigoInput && isValidQuantidadeInput && isValidDescricaoInput && isValidPrecoUnitInput) {
      try {
        const response = await axios.post('URL_DO_BACKEND', {
          name,
          quantidade,
          descricao,
          precoUnit,
        });
  
        window.alert('Dados enviados com sucesso');
        // Você pode tratar a resposta do backend aqui, se necessário
  
      } catch (error) {
        window.alert('Erro ao enviar dados para o backend:', error);
      }
    }
  }



  return (
    <div id="clientesForm">
      <h1>Produtos</h1>
      <div id="wrapFormCli">
      <form id="formPrincipal">
      <div id="inputsContainer">
        <Inputs
            labelText="Código de Barras"
            inputType="text"
            inputId="bigInput"
            placehInput="Cod Barras"
            errorMessage="Codigo inválido"
            containerType="bigContainer"
            value={codigo}
            onChange={handleCodigoChange}
            regex={/^(?!\s*$).+/}
            isValid={isValidCodigo}
          />
          <Inputs
            labelText="Produto"
            inputType="text"
            inputId="bigInput"
            placehInput="Produto"
            errorMessage="Produto inválido"
            containerType="bigContainer"
            value={name}
            onChange={handleNameChange}
            regex={/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/}
            isValid={isValidName}
          />
          <Inputs
            labelText="Descricao"
            inputType="text"
            inputId="bigInput"
            placehInput="Descricao"
            errorMessage="Descricao inválida"
            containerType="bigContainer"
            value={descricao}
            onChange={handleDescricaoChange}
            regex={/^(?!\s*$).+/}
            isValid={isValidDescricao}
          />
          <Inputs
            labelText="Quantidade"
            inputType="number"
            inputId="bigInput"
            placehInput="Quantidade"
            errorMessage="Quantidade inválida"
            containerType="bigContainer"
            value={quantidade}
            onChange={handleQuantidadeChange}
            regex={/^(?!\s*$).+/}
            isValid={isValidQuantidade}
          />
          <Inputs
            labelText="Preco Unit"
            inputType="number"
            inputId="bigInput"
            placehInput="Preco Unit"
            errorMessage="Preco inválido"
            containerType="bigContainer"
            value={precoUnit}
            onChange={handlePrecoUnitChange}
            regex={/^(?!\s*$).+/}
            isValid={isValidPrecoUnit}
          />
        </div>
        <button id="botaoCliente" onClick={handleFormSubmit}>Adicionar <AiOutlinePlus/></button>
      </form>
      <section id="tabelansky">
        <div id="clienteTableUp">
          <p>Código</p>
          <p>Nome</p>
          <p>Preço</p>
          <p>Quantidade</p>
        </div>
        <div id="clienteTableDown">
          <p>123</p>
          <p>Pistola</p>
          <p>20</p>
          <p>4</p>
          <div id="edit">
          <button className="buttonED"><AiFillEdit /></button>
          <button className="buttonED"><AiFillDelete /></button>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

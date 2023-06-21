import React, { useState } from "react";
import axios from 'axios';
import { AiOutlinePlus} from 'react-icons/ai';
import './Vendas.scss';

import { Inputs } from "../../micro/inputs/Inputs";

export const Vendas = () => {
  const [name, setName] = useState('');
  const [codigo, setCodigo] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [precoUnit, setPrecoUnit] = useState('');
  const [precoTotal, setPrecoTotal] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [isValidCodigo, setIsValidCodigo] = useState(true);
  const [isValidQuantidade, setIsValidQuantidade] = useState(true);
  const [isValidPrecoUnit, setIsValidPrecoUnit] = useState(true);
  const [isValidPrecoTotal, setIsValidPrecoTotal] = useState(true);

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleCodigoChange = (value) => {
    setCodigo(value);
  };

  const handleQuantidadeChange = (value) => {
    setQuantidade(value);
  };

  const handlePrecoUnitChange = (value) => {
    setPrecoUnit(value);
  };

  const handlePrecoTotalChange = (value) => {
    setPrecoTotal(value);
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

    const precoUnitRegex = /^(?!\s*$).+/;
    const isValidPrecoUnitInput = precoUnitRegex.test(precoUnit);
    setIsValidPrecoUnit(isValidPrecoUnitInput);

    const precoTotalRegex = /^(?!\s*$).+/;
    const isValidPrecoTotalInput = precoTotalRegex.test(precoTotal);
    setIsValidPrecoTotal(isValidPrecoTotalInput);

    if (isValidNameInput && isValidCodigoInput && isValidQuantidadeInput && isValidPrecoUnitInput && isValidPrecoTotalInput) {
      try {
        const response = await axios.post('URL_DO_BACKEND', {
          name,
          codigo,
          quantidade,
          precoUnit,
          precoTotal,
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
      <h1>Vendas</h1>
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
            value={name}
            onChange={handleNameChange}
            regex={/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/}
            isValid={isValidName}
          />
          <Inputs
            labelText="Código"
            inputType="text"
            inputId="bigInput"
            placehInput="Código"
            errorMessage="Código inválido"
            containerType="bigContainer"
            value={codigo}
            onChange={handleCodigoChange}
            regex={/^(?!\s*$).+/}
            isValid={isValidCodigo}
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
            placehInput="PrecoUnit"
            readOnly = {false}
            containerType="bigContainer"
            value={precoUnit}
            onChange={handlePrecoUnitChange}
            regex={/^(?!\s*$).+/}
            isValid={isValidPrecoUnit}
          />
          <Inputs
            labelText="Preco Total"
            inputType="number"
            inputId="bigInput"
            placehInput="PrecoTotal"
            readOnly = {false}
            containerType="bigContainer"
            value={precoTotal}
            onChange={handlePrecoTotalChange}
            regex={/^(?!\s*$).+/}
            isValid={isValidPrecoTotal}
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
        <div id="clienteTableDown">
          <p>1</p>
          <p>Pedro</p>
          <p>Pistola</p>
          <p>1</p>
          <p>R$ 20</p>
        </div>
      </section>
      </div>
    </div>
  )
}

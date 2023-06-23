import React, { useState, useEffect } from "react";
import axios from 'axios';
import { AiOutlinePlus, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import './Produtos.scss'

import { Inputs } from "../../micro/inputs/Inputs";

export const Produtos = () => {
  const [nomeProduto, setName] = useState('');
  const [codigoDeBarras, setCodigo] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [precoUnit, setPrecoUnit] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidCodigo, setIsValidCodigo] = useState(true);
  const [isValidQuantidade, setIsValidQuantidade] = useState(true);
  const [isValidDescricao, setIsValidDescricao] = useState(true);
  const [isValidPrecoUnit, setIsValidPrecoUnit] = useState(true);
  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/v1/produtos');
      const produtosData = response.data; // Dados retornados pelo backend
      setProdutos(produtosData); // Atualiza o estado global com os dados do backend
      console.log(produtosData); // Exibe os dados no console ou realiza outras operações necessárias
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

    const nameRegex = /^(?!\s*$).+/;
    const isValidNameInput = nameRegex.test(nomeProduto);
    setIsValidName(isValidNameInput);

    const codigoRegex = /^(?!\s*$).+/;
    const isValidCodigoInput = codigoRegex.test(codigoDeBarras);
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
      const novoProduto = {
        codigoDeBarras: parseInt(codigoDeBarras),
        nomeProduto: nomeProduto,
        descricao: descricao,
        quantidade: parseInt(quantidade),
        precoUnit: parseFloat(precoUnit)
      };

      console.log('Dados a serem enviados:', novoProduto);

      try {
        // Fazendo a solicitação POST ao backend
        const response = await axios.post('http://localhost:8080/v1/produtos', novoProduto);
        console.log(response.data); // Resposta do backend (opcional)
        setProdutos([...produtos, novoProduto]);
        window.alert('Dados enviados com sucesso');
      } catch (error) {
        console.error(error);
        // Lógica para lidar com o erro da solicitação
        window.alert('Erro ao enviar dados para o backend');
        console.log(error.response.data);
      }
    }
  }

  const handleEdit = (productId) => {
    // Lógica para lidar com a edição do produto com o ID fornecido
    // Pode ser exibido um modal de edição, redirecionado para uma página de edição, etc.
    console.log(`Editar produto com ID: ${productId}`);
  };
  
  const handleDelete = async (codigoDeBarras) => {
    try {
      await axios.delete(`http://localhost:8080/v1/produtos/${codigoDeBarras}`);
      const updatedProdutos = produtos.filter((produto) => produto.codigoDeBarras !== codigoDeBarras);
      setProdutos(updatedProdutos);
      window.alert('Deu bão');
      console.log(`Excluir produto com código de barras: ${codigoDeBarras}`);
    } catch (error) {
      window.alert('Erro ao enviar dados para o backend');
      console.error(error);
    }
  };

  return (
    <div id="clientesForm">
      <h1>Produtos</h1>
      <div id="wrapFormCli">
      <form id="formPrincipal">
      <div id="inputsContainer">
        <Inputs
            labelText="Código de Barras"
            inputType="number"
            inputId="bigInput"
            placehInput="Cod Barras"
            errorMessage="Codigo inválido"
            containerType="bigContainer"
            value={codigoDeBarras}
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
            value={nomeProduto}
            onChange={handleNameChange}
            regex={/^(?!\s*$).+/}
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
        {produtos.map((produto) => (
  <div key={produto.codigoDeBarras} id="clienteTableDown">
    <p>{produto.codigoDeBarras}</p>
    <p>{produto.nomeProduto}</p>
    <p>{produto.precoUnit}</p>
    <p>{produto.quantidade}</p>
    <div id="edit">
      <button className="buttonED" onClick={() => handleEdit(produto.codigoDeBarras)}><AiFillEdit /></button>
      <button className="buttonED" onClick={() => handleDelete(produto.codigoDeBarras)}><AiFillDelete /></button>
    </div>
  </div>
))}
      </section>
      </div>
    </div>
  )
}

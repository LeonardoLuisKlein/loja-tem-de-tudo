import React, { useState } from "react";
import { AiOutlinePlus, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import './Produtos.scss'

import { Inputs } from "../../micro/inputs/Inputs";

export const Produtos = () => {
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
          />
          <Inputs
            labelText="Nome"
            inputType="text"
            inputId="bigInput"
            placehInput="Nome"
            errorMessage="Nome inválido"
            containerType="bigContainer"
          />
          <Inputs
            labelText="Descricao"
            inputType="number"
            inputId="bigInput"
            placehInput="Descricao"
            errorMessage="Descricao inválida"
            containerType="bigContainer"
          />
          <Inputs
            labelText="Quantidade"
            inputType="number"
            inputId="bigInput"
            placehInput="Quantidade"
            errorMessage="Quantidade inválida"
            containerType="bigContainer"
          />
          <Inputs
            labelText="Preco Unit"
            inputType="date"
            inputId="bigInput"
            errorMessage="Preco inválido"
            containerType="bigContainer"
          />
        </div>
        <button id="botaoCliente">Adicionar <AiOutlinePlus/></button>
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

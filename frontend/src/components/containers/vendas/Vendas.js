import React, { useState } from "react";
import { AiOutlinePlus, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import './Vendas.scss';

import { Inputs } from "../../micro/inputs/Inputs";

export const Vendas = () => {
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
          />
          <Inputs
            labelText="Código"
            inputType="text"
            inputId="bigInput"
            placehInput="Código"
            errorMessage="Código inválido"
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
            inputType="number"
            inputId="bigInput"
            placehInput="PrecoUnit"
            errorMessage="PrecoUnit inválido"
            containerType="bigContainer"
          />
          <Inputs
            labelText="Preco Total"
            inputType="number"
            inputId="bigInput"
            errorMessage="Preco total inválido"
            containerType="bigContainer"
          />
        </div>
        <button id="botaoCliente">Adicionar <AiOutlinePlus/></button>
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

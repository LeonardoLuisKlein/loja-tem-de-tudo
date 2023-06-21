import React, { useState } from "react";
import { AiOutlinePlus, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import './Clientes.scss'

import { Inputs } from "../../micro/inputs/Inputs";

export const Clientes = () => {
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
          />
          <Inputs
            labelText="Endereco"
            inputType="text"
            inputId="bigInput"
            placehInput="Email"
            errorMessage="Endereco inválido"
            containerType="bigContainer"
          />
          <Inputs
            labelText="CPF"
            inputType="number"
            inputId="bigInput"
            placehInput="CPF"
            errorMessage="CPF inválido"
            containerType="bigContainer"
          />
          <Inputs
            labelText="Data Nasc"
            inputType="date"
            inputId="bigInput"
            errorMessage="Data inválida"
            containerType="bigContainer"
          />
        </div>
        <button id="botaoCliente">Adicionar <AiOutlinePlus/></button>
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
          <button className="buttonED"><AiFillEdit /></button>
          <button className="buttonED"><AiFillDelete /></button>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

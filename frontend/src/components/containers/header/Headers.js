import React from 'react'
import { Link } from 'react-router-dom';
import './Headers.scss';

export const Headers = () => {
  return (
    <header>
      <h1 id="headerTitle">Loja</h1>
      <div id="linksContainer">
        <a href="/" className="linkTitle">HOME</a>
        <a href="/vendas" className="linkTitle">VENDAS</a>
        <a className="linkTitle">CLIENTES</a>
        <a className="linkTitle">PRODUTOS</a>
        <a className="linkTitle">CATEGORIAS</a>
        <a className="linkTitle">CIDADES</a>
      </div>
    </header>
  )
}

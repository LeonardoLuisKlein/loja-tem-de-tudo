import React from 'react'
import './Headers.scss';

export const Headers = () => {
  return (
    <header>
      <a href="/" id="headerTitle">LOJA</a>
      <div id="linksContainer">
        <a href="/vendas" className="linkTitle">VENDAS</a>
        <a href="/clientes" className="linkTitle">CLIENTES</a>
        <a href="/produtos" className="linkTitle">PRODUTOS</a>
        <a href="/buscar" className="linkTitle">BUSCAR</a>
      </div>
    </header>
  )
}

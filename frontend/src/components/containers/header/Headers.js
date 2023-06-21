import React from 'react'
import './Headers.scss';

export const Headers = () => {
  return (
    <header>
      <h1 id="headerTitle">LOJA</h1>
      <div id="linksContainer">
        <a href="/" className="linkTitle">HOME</a>
        <a href="/vendas" className="linkTitle">VENDAS</a>
        <a href="/clientes" className="linkTitle">CLIENTES</a>
        <a href="/produtos" className="linkTitle">PRODUTOS</a>
      </div>
    </header>
  )
}

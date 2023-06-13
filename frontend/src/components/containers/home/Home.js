import React from 'react'
import './Home.scss'
import Imagem from '../../../assets/Loja.png'

export const Home = () => {
  return (
    <div id="homePage">
        <div id="homeWrapper">
            <div id="titles">
                <h1 id="homeTitle">Bem vindo a Loja</h1>
                <p className='homeP'>Este é o painel administrativo.<br/>Se concentre e faça ótimas vendas,<br/>obtenha os melhores lucros!</p>
            </div>
            <img src={Imagem} alt='logo loja' id="homeImage"/>
        </div>
    </div>
  )
}

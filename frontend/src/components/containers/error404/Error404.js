import React from 'react'
import Imagem from "../../../assets/error404.gif";
import "./Error404.scss";

export const Error404 = () => {
  return (
    <div className="errorPage">
        <img src={Imagem} alt="Error 404 image" className='errorGif' />
    </div>
  )
}

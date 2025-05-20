// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { ProdutosDb } from "../../assets/database/ProdutoDb";

interface Produto {
  nome: string;
  img: string;
  descricao: string;
  preco: string;
}

const CardHome: React.FC<Produto> = ({ nome, img, descricao, preco }) => {
  return (
    <div className="card-home">
      <div className="container-cardHome">
        <div className="img-cardHome__text">
          <img className="img-cardHome" src={img} alt="" />
          <h3 className="title-cardHome">{`Modelo ${nome}`}</h3>
        </div>
        <div className="text-info">
          {/* <h2 className="descricao-cardHome">Floral</h2> */}
          <p className="info-cardHome">{descricao}</p>
          <div className="container-btn">
            <p>{`Preço R$: ${preco}`}</p>
            <Link to="/carrinho" className="link">
              <div className="prod-cardHome__btn">Adicionar ao carrinho</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHome;

import React from "react";

interface cardProd {
  nome: string;
  img: string;
}

const CardProduto: React.FC<cardProd> = ({ nome, img }) => {
  return (
    <div className="card-produto">
      <div className="card-container">
        <div className="img-card__div">
          <img className="img-card" src={img} alt="" />
        </div>
        <p>{`Modelo ${nome}`}</p>
      </div>
    </div>
  );
};

export default CardProduto;

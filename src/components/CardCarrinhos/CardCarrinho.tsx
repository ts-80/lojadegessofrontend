import React from "react";

interface ItemCarrinho {
  nome: string;
  img: string;
  qtd: number;
  valor: string;
}

const CardCarrinho: React.FC<ItemCarrinho> = ({ nome, img, qtd, valor }) => {
  return (
    <div className="containerCard-carrinho__div">
      <div className="box-carrinho">
        <div className="info-items">
          <div className="img-carrinho__div">
            <img className="img-carrinho" src={img} alt="" />
          </div>
          <p className="text-info__carrinho">{nome}</p>
          <p className="text-info__carrinho">{`R$${valor}`}</p>
          <p className="text-info__carrinho">{`Quantidade: ${qtd}`}</p>
          <p className="text-info__carrinho">{`Preço total ${(
            Number(valor) * qtd
          ).toFixed(2)}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCarrinho;

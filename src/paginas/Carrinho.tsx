import React, { useState } from "react";
import { CarrinhoDb } from "../assets/database/CarrinhoDb";
import CardCarrinho from "../components/CardCarrinhos/CardCarrinho";

const Carrinho = () => {
  const totalProd = CarrinhoDb.map((val) => val.qtd).reduce(
    (val, valAtual) => val + valAtual,
    0
  );

  const valTotal = CarrinhoDb.map((val) => Number(val.valor)).reduce(
    (val, valAtual) => val + valAtual,
    0
  );

  return (
    <div>
      <div className="header-descricao">
        <div className="box-header">
          <p className="text-header__carrinho div-img__info">Produtos</p>
          <p className="text-header__carrinho">Preço Unitário</p>
          <p className="text-header__carrinho">Quantidade</p>
          <p className="text-header__carrinho">Preço Total</p>
        </div>
      </div>
      {CarrinhoDb.map((val) => (
        <CardCarrinho
          key={val.nome}
          nome={val.nome}
          img={val.img}
          qtd={val.qtd}
          valor={val.valor}
        />
      ))}
      <div className="rodape-carrinho">
        <div className="box-rodape">
          <p className="text-rodape">{`Items Total ${totalProd}`}</p>
          <p className="text-rodape">{`Valor Total ${valTotal}`}</p>
          <a className="link" href="/pagamento">
            <div className="div-link">
              <p>Ir para pagamento</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;

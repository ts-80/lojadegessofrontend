// import React from "react";
import CardProduto from "./CardProduto";
import { ProdutosDb } from "../../assets/database/ProdutoDb";

const Produto = ({}) => {
  return (
    <div className="container-produtos">
      <div className="baner-produtos___div">
        <div className="container-img">
          <img
            className="img-banner__produtos"
            src="https://vivianareis.com.br/wp-content/uploads/2019/11/decoracao-com-placa-de-gesso-3d-024.jpg"
            alt=""
          />
          <div className="card-produtos">
            {ProdutosDb.map((produto) => (
              <CardProduto
                key={produto.id}
                nome={produto.nome}
                img={produto.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produto;

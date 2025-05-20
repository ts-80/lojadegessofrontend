// import React from "react";
import { ProdutosDb } from "../assets/database/ProdutoDb";
// import Produtos from "../components/CardProducts/Produtos";
import CardHome from "../components/CardProducts/CardHome";
// import Produto from "../components/CardProducts/Produto";

const Produtos = ({}) => {
  // const { id, nome, img, descricao, preco } = ProdutosDb;
  return (
    <div className="container-home">
      <div className="home ">
        {ProdutosDb.map((produtos) => (
          <CardHome
            key={produtos.id}
            nome={produtos.nome}
            img={produtos.img}
            descricao={produtos.descricao}
            preco={produtos.preco}
          />
        ))}
      </div>
    </div>
  );
};

export default Produtos;

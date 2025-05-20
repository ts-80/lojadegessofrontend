import React from "react";
import Produto from "../components/CardProducts/Produto";
import CardHome from "../components/CardProducts/CardHome";
import { ProdutosDb } from "../assets/database/ProdutoDb";

const Home = () => {
  return (
    <div className="produtos">
      <Produto />
    </div>
  );
};

export default Home;

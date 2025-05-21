// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CarrinhoDb } from "../../assets/database/CarrinhoDb";
import { useState } from "react";

interface Produto {
  nome: string;
  img: string;
  descricao: string;
  preco: string;
}

interface ItemCarrinho {
  nome: string;
  img: string;
  qtd: number;
  valor: string;
}

const CardHome: React.FC<Produto> = ({ nome, img, descricao, preco }) => {
  const [qtd, setQtd] = useState(1);

  const addCarrinho = () => {
    if (qtd <= 0) {
      alert("Quantidade deve ser maior que zero");
    }

    const novoItem: ItemCarrinho = {
      nome,
      img,
      qtd,
      valor: preco,
    };
    CarrinhoDb.push(novoItem);
    alert(`${qtd} ${nome}(s) adicionado(s) ao carrinho!`);
    console.log(CarrinhoDb);
  };

  return (
    <div className="card-home">
      <div className="container-cardHome">
        <div className="img-cardHome__text">
          <img className="img-cardHome" src={img} alt={nome} />
          <h3 className="title-cardHome">{`Modelo ${nome}`}</h3>
        </div>
        <div className="text-info">
          {/* <h2 className="descricao-cardHome">Floral</h2> */}
          <p className="info-cardHome">{descricao}</p>
          <div className="container-btn">
            <p>{`Preço R$: ${preco}`}</p>
            <div className="qtd-produtos">
              <p>Qtd:</p>
              <input
                className="car-add__inpt"
                type="number"
                min="1"
                value={qtd}
                placeholder="0"
                onChange={(evento) =>
                  setQtd(Math.max(1, Number(evento.target.value)))
                }
              />
            </div>
            <button className="link">
              <div onClick={addCarrinho} className="prod-cardHome__btn">
                Adicionar ao carrinho
              </div>
            </button>

            <Link to="/carrinho" className="link">
              Ver Carrinho ({CarrinhoDb.length})
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHome;

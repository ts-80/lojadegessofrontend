import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="container-header">
      <div className="header">
        <Link className="link" to={"/"}>
          <p className="text-header">Casa do Gesso</p>
        </Link>
      </div>
      <div className="container-links">
        <Link className="link" to={"/produtos"}>
          <div className="div-link">
            <p>Produtos</p>
          </div>
        </Link>
        <Link className="link" to={"/calculadora"}>
          <div className="div-link">Calculadora</div>
        </Link>
      </div>
      <div className="carrinho">
        <Link to={"/"}>
          <FontAwesomeIcon className="carrinho-icon" icon={faWhatsapp} />
        </Link>
        <Link to={"/"}>
          <FontAwesomeIcon className="carrinho-icon" icon={faSquareInstagram} />
        </Link>
        <Link className="link" to={"/carrinho"}>
          <FontAwesomeIcon className="carrinho-icon" icon={faCartShopping} />
        </Link>
      </div>
    </div>
  );
};

export default Header;

// https://tecnoobras.com.br/wp-content/uploads/2021/01/Captura-de-Tela-2021-01-12-a%CC%80s-10.08.10-1024x806.png
// https://sturemoveis.com.br/wp-content/uploads/2024/07/placa-de-gesso-3d.jpg

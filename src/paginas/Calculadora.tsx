import { useState } from "react";

const Calculadora = () => {
  //   const [alturaPlaca, setAlturaPlaca] = useState(0.0);
  //   const [larguraPlaca, setLarguraPlaca] = useState(0.0);
  const [alturaParede, setAlturaParede] = useState(0.0);
  const [larguraParede, setLarguraParede] = useState(0.0);
  const [resultParede, setResultParede] = useState(0.0);
  const [resultPlaca, setResultPlaca] = useState(0.0);
  const [resultado, setResultado] = useState(0.0);
  const [selectPlaca, setSelectPlaca] = useState("");

  const placas = [
    { id: 1, name: "Escolha um tamanho de placa", altura: 0.0, largura: 0.0 },
    { id: 2, name: "30 x 30", altura: 0.3, largura: 0.3 },
    { id: 3, name: "40 x 40", altura: 0.4, largura: 0.4 },
    { id: 4, name: "50 x 50", altura: 0.5, largura: 0.5 },
  ];

  const Calculo = () => {
    const calcParede = () => {
      const metroQuadrado = Number((alturaParede * larguraParede).toFixed(2));
      const parteInteira = Math.floor(metroQuadrado);
      const parteDecimal = metroQuadrado - parteInteira;
      if (parteDecimal > 0 && parteDecimal < 0.5) {
        setResultParede(parteInteira + 0.5);
      } else if (parteDecimal > 5) {
        setResultParede(parteInteira + 1);
      } else {
        setResultParede(metroQuadrado);
      }

      return resultParede;
    };

    const calcPlaca = () => {
      let placa = placas
        .filter((val) => val.name === selectPlaca)
        .map((value) => {
          return (1 / (value.altura * value.largura)).toFixed(2);
        });
      console.log(placa);

      let primeiraParte = Math.floor(Number(placa));
      let decimal = Number((Number(placa) - primeiraParte).toFixed(2));
      console.log(decimal);

      // if (decimal > 0) {
      //   primeiraParte += 1;
      //   decimal = 0;
      //   setResultPlaca(primeiraParte + 0.0);
      //   console.log(primeiraParte + 0.0);
      // } else {
      //   setResultPlaca(Number(placa));
      // }
      setResultPlaca(Number(placa));
      return resultPlaca;
    };

    const parede = calcParede();
    const placa = calcPlaca();
    let inteiro = Math.floor(placa * parede);
    let decimal = placa * parede - inteiro;

    if (decimal > 0) {
      inteiro += 1;
      decimal = 0.0;
      setResultado(inteiro + decimal);
    } else {
      setResultado(placa * parede);
    }

    return resultado.toFixed(2);
  };

  return (
    <div className="container-calc">
      <div className="box-title">
        <h2 className="title-calc">
          Calcule o calculo do metro² e a quantidade de placas
        </h2>
        <div className="box-calc">
          <div className="box-AlturaParede">
            <p className="intup-desc">{`Informe a altura da parede:`}</p>
            <input
              className="input-calc input-setas"
              type="number"
              name="alturaParede"
              //   value={alturaParede}
              onChange={(evento) =>
                setAlturaParede(Number(evento.target.value))
              }
              placeholder="Ex: 2,20"
            />
          </div>
          <div className="box-LarguraParede">
            <p className="intup-desc">{`Informe a largura da parede:`}</p>
            <input
              className="input-calc input-setas"
              type="number"
              name="larguraParede"
              onChange={(evento) =>
                setLarguraParede(Number(evento.target.value))
              }
              placeholder="Ex: 3,40"
            />
          </div>
          <div className="div-select">
            <p className="intup-desc">Tamanho da placa:</p>
            <select
              className="input-calc select-placa"
              value={selectPlaca}
              onChange={(evento) => setSelectPlaca(evento.target.value)}
            >
              {placas.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="box-btn">
            <div className="btn-calc" onClick={Calculo}>
              Calcular
            </div>
          </div>

          <div className="result-calc">
            <p>{`Tamanho escolhido: ${
              selectPlaca === "Escolha um tamanho de placa" ? " " : selectPlaca
            }`}</p>
            <p className="intup-desc">{`Altura Informada: ${
              alturaParede ? alturaParede : " "
            }`}</p>
            <p className="intup-desc">{`Largura Informada: ${
              larguraParede ? larguraParede : " "
            }`}</p>
            <p className="intup-desc">{`Resultado: ${
              resultado ? resultado : " "
            } M² o valor sempre é arredondao para não faltar placas na execução e não haver disperdicio!`}</p>
            <p>{`result parede ${resultParede}`}</p>
            <p>{`result placa ${resultPlaca}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;

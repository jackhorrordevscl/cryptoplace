import { useContext, useEffect, useState } from "react";
import "./home.css";
import { CoinContext } from "../../context/CoinContext";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          El Mayor <br /> Marketplace de Criptomonedas
        </h1>
        <p>
          Bienvenido al mayor marketplace de criptomonedas. Regístrate para
          explorar más sobre criptos.
        </p>
        <form>
          <input type="text" placeholder="Buscar criptomoneda" />
          <button type="submit">Buscar</button>
        </form>
      </div>
      <div className="cryto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Monedas</p>
          <p>Precio</p>
          <p style={{ textAlign: "center" }}>Cambio 24H</p>
          <p className="market-cap">Capitalización Mercado</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <div className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="" />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price}
            </p>
            <p
              className={item.price_change_percentage_24h > 0 ? "green" : "red"}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}
            </p>
            <p className="market-cap">
              {currency.symbol}
              {item.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

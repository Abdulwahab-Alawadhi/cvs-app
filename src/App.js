import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Card } from "./Card";
import cvs from "./assets/cvs.png";
import { CardPrices } from "./Card";
import advil from "./assets/advil.jpeg";
import asprin from "./assets/asprin.jpeg";
function App() {
  const prices = [
    {
      label: "Asprin",
      price: "5KD",
      pic: asprin,
    },
    {
      label: "Advil",
      price: "7KD",
      pic: advil,
    },
  ];

  return (
    <div className="App-header">
      <Card />

      <img src={cvs} width="1200px" />
      <div className="Card-style">
        {prices.map((price) => (
          <CardPrices label={price.label} price={price.price} pic={price.pic} />
        ))}
      </div>
    </div>
  );
}

export default App;

import "./App.css";
function Card() {
  return (
    <div className="Card-headers">
      <h1>CVS</h1>
      <p>Your go to Grocery store!</p>
    </div>
  );
}

function CardPrices({ label, price, pic }) {
  return (
    <div>
      <img src={pic} width="300px" />
      <h4>{label}</h4>
      <p>{price}</p>
    </div>
  );
}

export { Card, CardPrices };

import logo from "./logo.svg";
import "./App.css";
import { Card } from "./Card";
import cvs from "./assets/cvs.png";
function App() {
  return (
    <div className="App-header">
      <Card />
      <img src={cvs} width="1200px" />
    </div>
  );
}

export default App;

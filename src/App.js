import './App.css';
import './css/main.css';
import Coin from './components/Coin/Coin.jsx';
import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import * as Svg from "./Svg.js";
import AccountBalance from "./components/AccountBalance/AccountBalance.jsx"

var toggleOn = "toggleOn";

function App() {
  return (
    <div className="App text-center bg-dark pb-1">
      <header className="App-header d-inline-flex flex-row justify-content-start align-items-center">
        <img src={logo} alt="React Logo" className="App-logo text-secondary" />
        <h1 className="h1 fw-bold">
          Coin Exchange YOLO
        </h1>
        <div className="px-4">
          <Svg.toggleOn id="themeToggleSwitch" width={"1.9rem"} height={"1.9rem"} strokeWidth={"100%"} className="text-gray" />
          <Svg.toggleOff id="themeToggleSwitch" width={"1.9rem"} height={"1.9rem"} strokeWidth={"100%"} className="text-secondary" />
        </div>
        </header>
        <AccountBalance amount={10000} myClass="text-light d-flex flex-row justify-content-center fs-1" />
        <br></br>
        <div className="container d-flex px-0 m-5">
        <table className="table rounded mb-0">
        <thead className="">
            <tr className="pt-3 bg-electricBlue">
              <th scope="col" className="">#</th>
              <th scope="col">Name</th>
              <th scope="col">Ticker</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
        </thead>
        <tbody className="table-warning align-middle">
          <Coin id="1" name="Bitcoin" ticker="BTC" price={65000.00} myClassName="" />
          <Coin id="2" name="Ethereum" ticker="ETH" price={2000.00} myClassName=""/>
          <Coin id="3" name="Doge" ticker="DOGE" price={0.30} myClassName="" />
          <Coin id="4" name="Ripple" ticker="XRP" price={1.30} myClassName="" />
          
        </tbody>
      </table>
      </div>


     
    </div>
  );
}

export default App;

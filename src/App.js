// import react
import React from 'react';
// import bootstrap;
import './css/main.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
/// import components
import Header from './components/Header/Header.jsx';
import AccountBalance from "./components/AccountBalance/AccountBalance.jsx";
import CoinList from './components/CoinList/CoinList.jsx';

// import { v4 as uuidv4 } from 'uuid';

var toggleOn = "toggleOn";

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        balance: 10000.00,
        coinData: [
          {
            key: 1,
            name: 'Bitcoin',
            ticker: 'BTC',
            price: 9999.99,
          },
          {
            key: 2,
            name: 'Ethereum',
            ticker: 'ETH',
            price: 2999.99,
          },
          {
            key: 3,
            name: 'Doge',
            ticker: 'DOGE',
            price: 0.99,
          },
          { 
            key: 4,
            name: 'Ripple',
            ticker: 'XRP',
            price: 1.99,
          },
          {
            key: 5,
            name: 'Bitcoin Cash',
            ticker: 'BCH',
            price: 231.99,
          },
        ]
      }
    }
  
  render(){
    return (
      <div className="App text-center bg-dark pb-1">
          <Header />
          <AccountBalance amount={this.state.balance.toFixed(2)} myClass="border border-color-white h4" />
          <CoinList coinData={this.state.coinData} />
       
      </div>
    );
  }
}

export default App;

// import react
import React from 'react';
/// import components
import Header from './components/Header/Header.jsx';
import AccountBalance from "./components/AccountBalance/AccountBalance.jsx";
import CoinList from './components/CoinList/CoinList.jsx';

// import { v4 as uuidv4 } from 'uuid';

var toggleOn = "toggleOn";

class App extends React.Component {
  state = {
    balance: 10000.00,
    coinData: [
      {
        id: 1,
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5,
        price: 9999.99,
      },
      {
        id: 2,
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 32,
        price: 2999.99,
      },
      {
        id: 3,
        name: 'Doge',
        ticker: 'DOGE',
        balance: 100,
        price: 0.99,
      },
      { 
        id: 4,
        name: 'Ripple',
        ticker: 'XRP',
        balance: 1000,
        price: 1.99,
      },
      {
        id: 5,
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        balance: 20,
        price: 231.99,
      },
    ],
    showBalance: true,
  }
  handleShowBalance = (currShowBalance) => {
    this.setState({showBalance : currShowBalance? false:true});
  }
  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map(function( values ){
      let newValues = {...values};
      if (valueChangeTicker === values.ticker ){
        const randomPercentage = 0.99 + Math.random() * 0.02;
        newValues.price = Number((newValues.price * randomPercentage).toFixed(2));
      };
      return newValues;
    });
    this.setState({coinData : newCoinData});
  }
  render(){
    return (
      <div className="App text-center bg-dark pb-1">
          <Header />
          <AccountBalance amount={this.state.balance.toFixed(2)} showBalance={this.state.showBalance} handleShowBalance={this.handleShowBalance} myClass="border d-flex justify-content-center border-color-white h4 mb-5" />
          <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} showBalance={this.state.showBalance} />
       
      </div>
    );
  }
}

export default App;

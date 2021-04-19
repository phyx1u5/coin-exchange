// import react
import React, {useState, useEffect} from 'react';
/// import components
import Header from './components/Header/Header.jsx';
import AccountBalance from "./components/AccountBalance/AccountBalance.jsx";
import CoinList from './components/CoinList/CoinList.jsx';
import axios from 'axios';

// import { v4 as uuidv4 } from 'uuid';

// var toggleOn = "toggleOn";
const COIN_COUNT = 10;
const formatPrice = price => Number(price.toFixed(2));

export default function App(props) {

  const [balance, setBalance] = useState(10000.00);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
    const response = await axios.get("https://api.coinpaprika.com/v1/coins/").catch(function(error){console.log(error)});
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const tickerUrl = "https://api.coinpaprika.com/v1/tickers/";
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises).catch(function(error){console.log(error)});;
    const coinPriceData = coinData.map(function(response) {
      const coin = response.data;
      return {
        key: coin.id,
        id: coin.rank,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes.USD.price),
      }
    });
    setCoinData(coinPriceData); // if object key is same as value i.e {key:key} then can just use {key}
  }

  useEffect(function() {
    if (coinData.length === 0){ // component did mount
      componentDidMount();
    } else { // component did update
      
    }

  });

  const handleShowBalance = (currShowBalance) => {
    setShowBalance(currShowBalance? false:true);
  }

  const handleRefresh = async (idChangeTicker) => {
    const updateCoinData = await axios.get("https://api.coinpaprika.com/v1/tickers/" + idChangeTicker);
    const newCoinData = coinData.map(function( values ){
      let newValues = {...values};
      if (idChangeTicker === values.key ){
        newValues.price = formatPrice(updateCoinData.data.quotes.USD.price);
      };
      return newValues;
    });
    setCoinData(newCoinData);
  }

  return (
    <div className="App text-center bg-dark pb-1">
        <Header />
        <AccountBalance amount={balance.toFixed(2)} showBalance={showBalance} handleShowBalance={handleShowBalance} myClass="container border rounded-2 d-flex justify-content-center border-color-white h4 mb-5" />
        <CoinList coinData={coinData} handleRefresh={handleRefresh} showBalance={showBalance} />
      
    </div>
  );
}

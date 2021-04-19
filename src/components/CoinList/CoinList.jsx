import React from 'react'
import Coin from '../Coin/Coin.jsx';

export default function CoinList(props) {

    const showClass = props.showBalance ? "" : "d-none"; 

    return (
        <div className="container d-flex flex-row justify-content-center p-4 m-auto bg-white rounded">
            <table className="table mb-0">
                <thead className="">
                    <tr className="pt-3 table table-primary">
                        <th scope="col" className="">Rank</th>
                        <th scope="col">Name</th>
                        <th scope="col">Ticker</th>
                        <th scope="col">Price</th>
                        <th scope="col" className={showClass} >Balance</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-warning align-middle">
                    {
                    props.coinData.map( 
                        ({id, name, ticker, price, balance, key}) => 
                            <Coin 
                                key={key} 
                                handleRefresh={props.handleRefresh}
                                id2={key}
                                id={id} 
                                name={name} 
                                ticker={ticker} 
                                price={price} 
                                balance={balance}
                                showBalance={props.showBalance}
                            />
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}
import React, { Component } from 'react'
import Coin from '../Coin/Coin.jsx';


export default class CoinList extends Component {
    render() {
        return (
        <div className="container d-flex flex-row justify-content-center p-5 m-auto bg-white rounded">
            <table className="table mb-0">
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
                    {
                    this.props.coinData.map( 
                        ({key, name, ticker, price}) => 
                            <Coin 
                                key={key} 
                                handleRefresh={this.props.handleRefresh}
                                id={key} 
                                name={name} 
                                ticker={ticker} 
                                price={price} 
                            />
                        )
                    }

                </tbody>
            </table>
        </div>
        )
    }
}

// import React from 'react'

// function CoinList() {
//     return (
//         <div className="container d-flex flex-row justify-content-center p-5 m-auto bg-white rounded">
//             <table className="table mb-0">
//                 <thead className="">
//                     <tr className="pt-3 bg-electricBlue">
//                         <th scope="col" className="">#</th>
//                         <th scope="col">Name</th>
//                         <th scope="col">Ticker</th>
//                         <th scope="col">Price</th>
//                         <th scope="col"></th>
//                     </tr>
//                 </thead>
//                 <tbody className="table-warning align-middle">
//                     {
//                     this.props.coinData.map( 
//                         ({key, name, ticker, price}) => <Coin key={ticker} id={key} name={name} ticker={ticker} price={price} />
//                         )
//                     }

//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default CoinList



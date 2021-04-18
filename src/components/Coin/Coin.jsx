import React, { Component } from 'react'
// import React from 'react'
import PropTypes from 'prop-types';


export default class Coin extends Component {

    handleClick = (event) => {
        // prevent the default action of submitting the form
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);
    }
    
    render () {
        const showClass = this.props.showBalance ? "" : "d-none"; 
        return (
            <tr>
            <td>{this.props.id}</td>        
            <td>{this.props.name}</td>
            <td>{this.props.ticker}</td>
            <td>${this.props.price}</td>
            <td className={showClass}>{this.props.balance}</td>
            <td>
                <form action="#" method="POST">
                    <button onClick={this.handleClick} className="btn btn-secondary">Refresh</button>
                </form>
            </td>
        </tr>
        );
    }
}

Coin.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
}
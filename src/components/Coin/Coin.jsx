import React, { Component } from 'react'
// import './Coin.css'
import PropTypes from 'prop-types';


export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    // static propTypes = {
    //     name: PropTypes.string.isRequired,
    //     ticker: PropTypes.string.isRequired,
    //     price: PropTypes.number.isRequired,
    // }

    handleClick(event){
        // prevent the default action of submitting the form
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);

        // const randomPercentrage = 0.99 + Math.random() * 0.01;

        // this.setState( function(oldState) {
        //     return {
        //         price: (oldState.price * randomPercentrage).toFixed(2),
        //     };
        // });
    }


    render () {
        return (
            <tr>
            <td>{this.props.id}</td>        
            <td>{this.props.name}</td>
            <td>{this.props.ticker}</td>
            <td>${this.props.price}</td>
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
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}
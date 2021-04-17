import React, { Component } from 'react'
// import './Coin.css'
import PropTypes from 'prop-types';


export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        // prevent the default action of submitting the form
        event.preventDefault();

        const randomPercentrage = 0.995 + Math.random() * 0.01;

        this.setState( function(oldState) {
            return {
                price: oldState.price * randomPercentrage
            };
        });
    }


    render () {
        return (
            <tr>
            <td className={this.props.myClassName}>{this.props.id}</td>        
            <td className={this.props.myClassName}>{this.props.name}</td>
            <td className={this.props.myClassName}>{this.props.ticker}</td>
            <td className={this.props.myClassName}>${this.state.price}</td>
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
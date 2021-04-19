import React from 'react'
import PropTypes from 'prop-types';


export default function Coin(props) {

    const handleClick = (event) => {
        // prevent the default action of submitting the form
        event.preventDefault();
        props.handleRefresh(props.id2);
    }

    const showClass = props.showBalance ? "" : "d-none"; 

    return (
        <tr>
        <td>{props.id}</td>        
        <td>{props.name}</td>
        <td>{props.ticker}</td>
        <td>${props.price}</td>
        <td className={showClass}>{props.balance}</td>
        <td>
            <form action="#" method="POST">
                <button onClick={handleClick} className="btn btn-secondary">Refresh</button>
            </form>
        </td>
    </tr>
    );

}

Coin.propTypes = {
    id2: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
}
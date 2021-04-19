import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    display: block;
`;

export default function AccountBalance(props) {

    const handleClick = (event) => {
        // prevent the default action of submitting the form
        event.preventDefault();
        
        props.handleShowBalance(props.showBalance);

    }

    const buttonText = props.showBalance ? "Hide Balance" : "Show Balance";
    const showClass = props.showBalance ? "" : "d-none"; 

    return (
        <Section className={props.myClass}>
            <div className={showClass}>Balance: ${props.amount}</div>
            <form action="#" method="POST">
                <button onClick={handleClick}>{buttonText}</button>
            </form>
        </Section>
    );

}

AccountBalance.propTypes = {
    amount: PropTypes.string,
    myClass: PropTypes.string,
    showBalance: PropTypes.bool,
}
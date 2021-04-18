import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    display: block;
`;

export default class AccountBalance extends Component {
    // constructor(props) {
    //     super(props);
    // }

    handleClick = (event) => {
        // prevent the default action of submitting the form
        event.preventDefault();
        
        this.props.handleShowBalance(this.props.showBalance);

    }

    render() {
        const buttonText = this.props.showBalance ? "Hide Balance" : "Show Balance";
        const showClass = this.props.showBalance ? "" : "d-none"; 
        return (
            <Section className={this.props.myClass}>
                <div className={showClass}>Balance: ${this.props.amount}</div>
                <form action="#" method="POST">
                    <button onClick={this.handleClick}>{buttonText}</button>
                </form>
            </Section>
        );
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.string,
    myClass: PropTypes.string,
    showBalance: PropTypes.bool,
}
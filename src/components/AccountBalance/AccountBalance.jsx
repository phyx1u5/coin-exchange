import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    border:10px solid red;
`;

export default class AccountBalance extends Component {
    render() {
        return (
            <Section className={this.props.myClass}>
                Balance: ${this.props.amount}
            </Section>
        );
    }
}




AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired,
    myClass: PropTypes.string,
}
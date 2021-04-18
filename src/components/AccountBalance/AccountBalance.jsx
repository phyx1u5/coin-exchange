import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    display: block;
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
    amount: PropTypes.string,
    myClass: PropTypes.string,
}
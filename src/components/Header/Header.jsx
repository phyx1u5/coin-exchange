import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import logo from "./logo.svg";
import * as Svg from "../../svg/Svg.js";


const Header = () => {
        return (
            <header className="App-header d-inline-flex flex-row justify-content-start align-items-center">
            <img src={logo} alt="React Logo" className="App-logo text-secondary" />
            <h1>
              Coin Exchange YOLO
            </h1>
            <div className="px-4 h4">
              <Svg.toggleOn id="themeToggleSwitchOn" width={"1em"} height={"1em"} strokeWidth={"100%"} className="text-gray" />
              <Svg.toggleOff id="themeToggleSwitchOff" width={"1em"} height={"1em"} strokeWidth={"100%"} className="text-secondary" />
            </div>
            </header>
        )
}

export default Header
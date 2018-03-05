import React, { Component } from 'react';
import logo from '../assets/images/Logo_ML.png';

class Logo extends Component {

  render() {
    return (
      <div className="img-logo">
        <img src={logo}  alt="logo" />
      </div>
    );
  }
}
export default Logo;

import React, { Component } from 'react';
import logo from '../assets/images/logo-almundo.svg';

class Logo extends Component {

  static propTypes = {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <img src={logo} className="app-logo" alt="logo" />
      </div>
    );
  }
}
export default Logo;
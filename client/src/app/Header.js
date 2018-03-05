import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="header-container">
        <div className="header">
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default Header;

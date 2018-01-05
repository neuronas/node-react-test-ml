import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div>
        <div className="header-container">
          <div className="header">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
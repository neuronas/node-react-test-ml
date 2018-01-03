import React, { Component } from 'react';

class Header extends Component {

  static propTypes = {}

  constructor(props) {
    super(props);
  }

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
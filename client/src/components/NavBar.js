import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Filters extends Component {

  render() {

    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Toggle children={this.props.button}/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {this.props.children}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Filters;
import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem, Jumbotron, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Content from './Content';

class Layout extends Component {



  render() {
    return (
      <div>
        <Header>
          <Logo />
        </Header>

          <Navbar.Header>
            <div className="navbar-toggle collapsed pr-navbar">
              Filtrar
              <span className="glyphicon glyphicon-triangle-bottom"></span>
            </div>
          </Navbar.Header>

        <div className="container">
          <div className="wrapper">

            <Content />

          </div>
        </div>

      </div>
    );
  }
}
export default Layout;
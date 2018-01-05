import React, { Component } from 'react';

import Content from './Content';
import Header from './Header';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';
import Search from '../components/Filters/Search';
import Stars from '../components/Filters/Stars';


class Layout extends Component {


  render() {
  let filterButton = (<div>
                        Filtrar
                        <span className="glyphicon glyphicon-triangle-bottom"></span>
                      </div>)
    return (
      <div>
        <Header>
          <Logo />
        </Header>

        <NavBar button={filterButton}>
            <Search defaultExpanded={false} classProp="nav-panel"/>

            <Stars defaultExpanded={false} classProp="nav-panel"/>
        </NavBar>

        <div className="container">

          <Content />

          <hr>
          </hr>

          <footer>
            <p>&copy; 2018</p>
          </footer>

        </div>

      </div>
    );
  }
}
export default Layout;
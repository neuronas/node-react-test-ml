import React, { Component } from 'react';

import Content from './Content';
import Header from './Header';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';
import Search from '../components/Filters/Search';
import Stars from '../components/Filters/Stars';


class Layout extends Component {


  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this)

    this.state = {"filters": []}
  }

  onChange(param) {
    this.setState({filters: param})
  }


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
            <Search defaultExpanded={false} classProp="nav-panel" size="large" onChange={this.onChange}/>

            <Stars defaultExpanded={false} classProp="nav-panel" onChange={this.onChange}/>
        </NavBar>

        <div className="container">

          <Content filters={this.state.filters}/>

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
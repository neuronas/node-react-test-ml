import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './Header';
import Home from './Home';
import Product from './Product';
import Logo from '../components/Logo';
import InputSearch from '../components/InputSearch';

class Layout extends Component {

  render() {
    return (
      <div>

        <Header>
          <Logo />
          <InputSearch/>
        </Header>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/items' render={(props) => <Product {...props}/>}/>
        </Switch>

      </div>
    );
  }
}
export default Layout;

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import _ from 'lodash'
import Detail from './Detail';
import List from './List';
import BeadCrumb from '../components/BeadCrumb'

class Product extends Component {

  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = { loading: false, result: {} };
  }

  getData(query) {

    this.setState({ loading: true })
    let method, params
    if (query) {
      method = "/api/items?q=" + query
      params = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "GET"
      }
    }

    fetch(method, params)
    .then((res) => {
      return res.json()
    }).then((data) => {
      this.setState({loading: false, result: data})
    })
    .catch((res) => {
      console.log(res)
    })
  }

  render() {
    let categories = !_.isEmpty(this.state.result) ? this.state.result.categories : null
    return (
      <div className="container">

        <BeadCrumb categories={categories}/>

        <div className="content">
          <Switch>
            <Route exact path='/items' render={(props) => <List {...props} data={this.state.result} getData={this.getData} loading={this.state.loading}/>}/>
            <Route path='/items/:id' component={Detail}/>
          </Switch>
        </div>

      </div>
    );
  }
}
export default Product;

import React, { Component } from 'react';

import SideBar from './SideBar';
import List from './List';

class Content extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this)
    this.getData = this.getData.bind(this);

    this.state = {"filters": [], "hotels": {}, loading: false}
  }

  componentWillMount() {
    this.getData()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filters) {
      this.getData(nextProps.filters)
    } 
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filters !== this.state.filters) {
      this.getData(this.state.filters)
    }
  }

  getData(filters) {

    this.setState({loading: true})

    let method, params

    if (filters) {
      method = "/filtrar"
      params = {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(filters)
      }

    } else {
      method = "/listar"
      params = {
                accept: 'application/json'
              }
    }

    fetch(method, params)
    .then((res) => {
      return res.json()
    }).then((hotels) => {
      this.setState({loading: false, hotels})
    })
    .catch((res) => { 
      console.log(res)
    })

  }

  onChange(param) {
    this.setState({filters: param})
  }

  render() {
    return (
      <div className="row row-offcanvas row-offcanvas-right">
        <SideBar onChange={this.onChange} />
        <List data={this.state.hotels} filter={this.state.filters} loading={this.state.loading}/>
      </div>
    );
  }
}
export default Content;


import React, { Component } from 'react';
import Item from '../components/Item';


class List extends Component {


  constructor(props) {
    super(props);
    // this.search = this.search.bind(this);
  }

  componentWillMount() {
    // console.log("aaaaaaaa", this.search())
    
  }


  // search() {
  //   // http://localhost:3000/tvshow/5a4abb808fcd381d7d3c98c4
  //   fetch(`/tvshow/5a4abb808fcd381d7d3c98c4`, {
  //     accept: 'application/json'
  //   }).then((res) => {
  //     return res.json()
  //   })
  //   .then((recurso) => {console.log("CCCCC",recurso)})
  // }

  render() {
    return (
      <Item />
    );
  }
}
export default List;
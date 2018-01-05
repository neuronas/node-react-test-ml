import React, { Component } from 'react';
import Item from './Item';


class List extends Component {


  constructor(props) {
    super(props);
    // this.search = this.search.bind(this);
  }

  componentWillMount() {
    // console.log("aaaaaaaa", this.search())





    // this.filter({"stars": []})
  }

  componentWillReceiveProps(nextProps) {

    console.log("RRR", nextProps)
    if (nextProps.data) {
    console.log("RRR222", nextProps)
      this.setState({"hotels": nextProps.data})
    }
  }




  search() {
    // http://localhost:3000/tvshow/5a4abb808fcd381d7d3c98c4

  }

  render() {
    console.log("LIST-FILTERSSSS", this.props)

    let items;
    
    // console.log("STATE- L",this.state)
    if (this.state) {
      // items = this.state.map((a) => (
      items = this.state.hotels.map((a) => {
        // console.log("ITEMM- L", a)
        return <Item key={a.id} data={a} filter={this.filter}/>
      })
      
    }


    return (



      <div className="col-xs-12 col-sm-9" id="content-list">
        {items}

        

      </div>
    );
  }
}
export default List;
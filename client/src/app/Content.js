import React, { Component } from 'react';
import SideBar from './SideBar';
import List from './List';

class Content extends Component {

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this)
    this.getData = this.getData.bind(this);

    this.state = {"filters": [], "hotels": {}}

  }

  componentWillMount() {
    // console.log("aaaaaaaa", this.search())

    // fetch('/hotels', {
    //   accept: 'application/json'
    // }).then((res) => {
    //   return res.json()
    // })
    // .then((data) => {
    //   console.log("DDDDD",data)
    //   this.setState({data})
    // })

    this.getData()
  }

  componentWillReceiveProps(nextProps) {

    // console.log("RRR", nextProps)
    // if (nextProps.data) {
    // console.log("RRR222", nextProps)
    //   this.setState({"hotels": nextProps.data})
    // }
  }


  componentDidUpdate(prevProps, prevState) {
    console.log("DD--11", prevState)
    if (prevState.filters !== this.state.filters) {
    console.log("DDD--222", this.state)
      this.getData(this.state.filters)
    } else if (prevState.hotels !== this.state.hotels) {
    console.log("DDD--333", this.state)

    }
  }

  getData(filters) {
    console.log("FETCHHH111", filters)

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

    console.log("FETCHHH", method, params)

    fetch(method, params)
    .then((res) => {
      return res.json()
    }).then((hotels) => {

      console.log("FFF", hotels)
      // var hotels = res.json()
      this.setState({hotels})
    })
    .catch((res) => { console.log(res) })

  }

  onChange(param) {
    console.log("FFFFFFF", param)
    this.setState({filters: param})
  }

  search() {
    // http://localhost:3000/tvshow/5a4abb808fcd381d7d3c98c4
    // fetch(`/tvshow/5a4abb808fcd381d7d3c98c4`, {
      
    // fetch(`/hotels`, {
    //   accept: 'application/json'
    // }).then((res) => {
    //   return res.json()
    // })
    // .then((recurso) => {console.log("CCCCC",recurso)})
  }

  render() {
    console.log("UUUUUUUUUU", this.state)
    return (
      <div className="row row-offcanvas row-offcanvas-right">
        <SideBar onChange={this.onChange} />
        <List data={this.state.hotels} filter={this.state.filters}/>
      </div>
    );
  }
}
export default Content;


        // <div className="list">
        //   <Item />

        // </div>



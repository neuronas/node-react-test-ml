import React, { Component } from 'react';
import { withRouter } from 'react-router';
import imgLupa from '../assets/images/ic_Search.png';
class InputSearch extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = { search: "" }
  }

  handleChange(e) {
    let val = [];
    val[e.target.id] = e.target.value;
    this.setState(val);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/items?search=${this.state.search}`);
  }

  render() {
    return (
      <div className="input-seach">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
          <input id="search" type="text" value={this.state.search} onChange={this.handleChange} className="form-control" placeholder="Nunca dejes de buscar"/>
          <span className="input-group-btn">
          <button className="btn btn-secondary"><img src={imgLupa} className="img-lupa" alt="search" /></button>
          </span>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(InputSearch)

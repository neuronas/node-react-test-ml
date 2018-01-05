import React, { Component } from 'react';

import Item from './Item';
import LoadingOverlay from '../components/LoadingOverlay';


class List extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState({"hotels": nextProps.data})
    }
  }

  render() {
    let items, content;
    
    if (this.state && this.state.hotels.length > 0) {
      items = this.state.hotels.map((a) => {
        return <Item key={a.id} data={a} filter={this.filter}/>
      })
      
    }
    
    if (this.props.loading) {
      content = <LoadingOverlay />
    } else {
      content = items
    }
    return (
      <div className="col-xs-12 col-sm-9" id="content-list">
        {content}
      </div>
    );
  }
}
export default List;
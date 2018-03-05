import React, { Component } from 'react';
import queryString from 'query-string'

import Item from './Item';
import LoadingOverlay from '../components/LoadingOverlay';

class List extends Component {

  componentWillMount() {
    const parsed = queryString.parse(this.props.location.search);
    let query = parsed.search !== "" ? parsed.search : null

    if (query !== null) {
      this.props.getData(query)
    } else {
      this.props.getData("bici")
    }
  }

  componentWillReceiveProps(nextProps) {
    const propParsed = queryString.parse(this.props.location.search);
    const nextPropsParsed = queryString.parse(nextProps.location.search);

    if (propParsed.search !== nextPropsParsed.search) {
      this.props.getData(nextPropsParsed.search)
    }
  }

  render() {
    return (
      <div className="col-sm-12 col-md-12 col-lg-12 content-list">
        {
          this.props.loading
        ?
          <LoadingOverlay />
        :
          <div>
            {
              typeof this.props.data.items !== 'undefined' && this.props.data.items.length > 0
              ?
                this.props.data.items.map((item) => (
                  <Item key={item.id} data={item}/>
                ))
              :
                ""
            }

          </div>
        }
      </div>
    );
  }
}
export default List;

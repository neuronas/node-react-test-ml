import React, { Component } from 'react';

import Filters from '../components/Filters/Filters';


class SideBar extends Component {

  render() {
    return (
      <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">


        <Filters onChange={this.props.onChange} />

        <div className="list-group">

        </div>
      </div>

    );
  }
}
export default SideBar;
        // <Navbar.Collapse>
        // </Navbar.Collapse>

        // style={{"float": "left"}}
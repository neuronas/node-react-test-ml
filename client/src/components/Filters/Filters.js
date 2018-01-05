import React, { Component } from 'react';

import Panel from '../Panel';
import Search from './Search';
import Stars from './Stars';

class Filters extends Component {


  render() {
    return (
      <div>

        <Panel headerTitle="Filtros" classProp="side-panel-bold">
        </Panel>

        <Search defaultExpanded={this.props.defaultExpanded} classProp="side-panel" size="small"/>

        <Stars defaultExpanded={this.props.defaultExpanded} onChange={this.props.onChange} classProp="side-panel"/>

      </div>
    );
  }
}
export default Filters;
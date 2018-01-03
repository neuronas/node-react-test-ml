import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';

class PanelItem extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: true,
    };
  }

  render() {
    let header
    if (this.props.iconName) {
      header = (<div className="panel-title"> <svg className={`icon ${this.props.iconName}`}></svg> <span>{this.props.headerTitle}</span> <i className="glyphicon glyphicon-triangle-bottom pull-right" onClick={() => this.setState({ open: !this.state.open })}></i></div>)
    } else {
      header = this.props.headerTitle
    }

    return (
      <div>
        <Panel xs={6} sm={6} md={6} collapsible header={header} expanded={this.state.open} className={this.props.class ? this.props.class : ""}>
          {this.props.children}
        </Panel>
      </div>
    );
  }
}
export default PanelItem;
import React, { Component } from 'react';
import { Panel as PanelBS} from 'react-bootstrap';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: typeof props.defaultExpanded !== 'undefined' ? props.defaultExpanded : true
    };
  }

  render() {
    let header
    if (this.props.iconName) {
      header = (<div> <svg className={`icon icon-blue ${this.props.iconName}`}></svg> <span>{this.props.headerTitle}</span> <i className="glyphicon glyphicon-triangle-bottom pull-right" onClick={() => this.setState({ open: !this.state.open })}></i></div>)
    } else {
      header = this.props.headerTitle
    }

    return (
      <div>
        <PanelBS collapsible header={header} expanded={this.state.open} className={this.props.classProp ? this.props.classProp : ""}>
          {this.props.children}
        </PanelBS>
      </div>
    );
  }
}
export default Panel;
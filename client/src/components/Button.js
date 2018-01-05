import React, { Component } from 'react';
import { Button as ButtonBS } from 'react-bootstrap';

class Button extends Component {
  
  render() {
    let classProp = this.props.classProp ? this.props.classProp : ""
    return (
      <ButtonBS bsClass="am-button" bsSize={this.props.size} className={`btn ${classProp}`}>{this.props.value}</ButtonBS>
    );
  }
}
export default Button;
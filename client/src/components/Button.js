import React, { Component } from 'react';
import { Button as ButtonBS } from 'react-bootstrap';

class Button extends Component {
  
  render() {
    let size = this.props.size ? this.props.size : ""
    let bsSize = this.props.size === "btn-sm" ? "sm" : "lg"
    return (
      <ButtonBS bsClass="am-button" bsSize={bsSize} className={`btn ${size}`}>{this.props.value}</ButtonBS>
    );
  }
}
export default Button;
// glyphicon glyphicon-triangle-bottom

// style={{"border": "none", "marginLeft": "5px"}} 

// 
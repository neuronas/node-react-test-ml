import React, { Component } from 'react';
import { Form, FormGroup, FormControl,Grid, Row, Col } from 'react-bootstrap';

import Panel from '../Panel';
import Button from '../Button';

class Search extends Component {
  
  render() {
    let btnClass, inputClass;
    if (this.props.size === "large") {
      btnClass = "btn-lg"
      inputClass = ""
    } else if (this.props.size === "small") {
      btnClass = "btn-sm"
      inputClass = ""
    }
    return (
      <div>
        <Panel headerTitle="Nombre de hotel" iconName="svgSearch" classProp={this.props.classProp} defaultExpanded={this.props.defaultExpanded}>
          <Form>

            <FormGroup bsSize={this.props.size} className={`col-xs-8 col-sm-8 col-md-8 col-lg-8 ${inputClass}`} style={{"padding": "0px"}} controlId="formControlsText">
              <FormControl type="text" placeholder="Ingrese el nombre del hotel" />
            </FormGroup>
            <Button size={this.props.size} classProp={btnClass} value="Aceptar" />

          </Form>
        </Panel>
      </div>
    );
  }
}
export default Search;
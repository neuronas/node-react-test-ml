import React, { Component } from 'react';
import { Form, FormGroup, FormControl,Grid, Row, Col } from 'react-bootstrap';

import Panel from '../Panel';
import Button from '../Button';

class Search extends Component {
  
  render() {
    return (
      <div>
        <Panel headerTitle="Nombre de hotel" iconName="svgSearch" classProp={this.props.classProp} defaultExpanded={this.props.defaultExpanded}>
          <Form>

                  <FormGroup bsSize="small" className="col-xs-1 col-sm-8 col-md-8 col-lg-8" style={{"padding": "0px"}} controlId="formControlsText">
                    <FormControl type="text" placeholder="Ingrese el nombre del hotel" />
                  </FormGroup>
                  <Button size="btn-sm" value="Aceptar" />

          </Form>
        </Panel>
      </div>
    );
  }
}
export default Search;

// lg={10} md={8} sm={6} xs={6}

            // <Grid fluid>
              // <Row className="show-grid" >

              //   <Col lg={12} md={1} sm={1} xs={1} style={{"padding": "0px"}}>
              //   </Col>

              // </Row>
            // </Grid>
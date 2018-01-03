import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem, Jumbotron, NavDropdown, MenuItem, Button, PanelGroup, FormGroup, Radio, FormControl, Form, Panel } from 'react-bootstrap';
import PanelItem from '../components/PanelItem';

class SideBar extends Component {


  constructor(...args) {
    super(...args);
    this.state = {
      open: true,
    };
  }

  render() {
    return (
       <div className="left-panel">

        <Navbar.Collapse>

          <PanelItem headerTitle="Filtros" class="pr-panel-title">
          </PanelItem>

          <PanelItem headerTitle="Nombre de hotel" iconName="svgSearch" class="pr-panel">
            <Form inline>
              <FormGroup controlId="formControlsText">
                <FormControl type="text" placeholder="Ingrese el nombre del hotel" />
              </FormGroup>
              <Button bsClass="pr-button">Aceptar</Button>
            </Form>
          </PanelItem>

          <PanelItem headerTitle="Estrellas" iconName="svgStar" class="pr-panel">
            <FormGroup>
              <Radio name="radioGroup">
                1
              </Radio>
              {' '}
              <Radio name="radioGroup">
                2
              </Radio>
              {' '}
              <Radio name="radioGroup">
                3
              </Radio>
            </FormGroup>
          </PanelItem>

        </Navbar.Collapse>

      </div>

    );
  }
}
export default SideBar;
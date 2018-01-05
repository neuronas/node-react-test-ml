import React, { Component } from 'react';
import { FormGroup, Checkbox} from 'react-bootstrap';
// import Checkbox from '../Checkbox';

import Panel from '../Panel';

class Stars extends Component {

 constructor(props) {
    super(props);

    this.buildCheckbox = this.buildCheckbox.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)

    this.state = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      "all": true
    };

  }

  handleInputChange(event) {

    let values = []
    Object.entries(this.state).map(([key, val]) => {
      console.log("QQ", key,  val)
      
      values[key] = false
    })

    console.log("QQ-2", values)

    
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log("EEEEE-1", target.checked)
    console.log("EEEEE-2", name)

    // this.state.forEach((val, key) => {
    //   val[key] = false
    // })

    // for (var i of this.state) {
    //   console.log("QQ",this.state[i])
    // } 


    values[name] = true


    this.setState(
      values
    );
    this.props.onChange({"stars": name})
  }

  buildCheckbox(param, name, checked) {
    console.log("BUILD", param)

    return (<div key={name} className="checkbox"><label title=""><input
      name={name}
      type="checkbox"
      checked={this.state[name]}
      onChange={this.handleInputChange}
    />{param}</label></div>)
  }
  
  render() {
    console.log("STAR", this.state)
    // console.log("TTTTHHH", this.checkBox)

    let stars = []
    for (var i=0; i < 5; i++)  {
      const star = <svg key={i} className="icon-sm icon-gold svgStar"></svg>
      stars.push(star)
    }
    let count = 5;

    // let checkBoxs = []
    let name = 0
    let checkBoxs = stars.map((item, index) => {
      count--
      name++
      return this.buildCheckbox(stars.slice(count), name, false)
    })

    checkBoxs.push(this.buildCheckbox("Todas las estrellas", "all", true))


    return (
      <div>
        <Panel headerTitle="Estrellas" iconName="svgStar" classProp={this.props.classProp} defaultExpanded={this.props.defaultExpanded}>
          <FormGroup>

            {checkBoxs.reverse()}

          </FormGroup>
        </Panel>
      </div>
    );
  }
}
export default Stars;

            
            // <Checkbox >
            //   {"Todas las estrellas"}
            // </Checkbox>


            // {checkBox.reverse()}

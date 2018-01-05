import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import Button from '../components/Button';


// var imgName = "10210122_194_b.jpg";
// const img = require(`../assets/images/hotels/${imgName}`)

// import img from `../assets/images/hotels/${imgName}`;

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };

    // this.loadImgAndGetWidth = this.loadImgAndGetWidth.bind(this)
  }

  componentDidMount() {
    // console.log("LASTTT")
  }

  componentDidUpdate(prevProps, prevState) {
  }


  render() {
    // console.log("item-props-I", this.props.data)

    let stars = []
    for (var i=0; i < parseFloat(this.props.data.stars); i++)  {
      const star = <svg key={i} className="icon-sm icon-gold svgStar"></svg>
      stars.push(star)
    }
    let amenities = []
    for (var i=0; i < this.props.data.amenities.length; i++)  {
      const amenitie = <img key={i} className="icon-grey" src={`icons/amenities/${this.props.data.amenities[i]}.svg`}></img>
      amenities.push(amenitie)
    }

    return (


      <div className="item-hotel">

        <Col lg={4} md={4} sm={4} xs={12} className="box-img">
          <img ref="hotel" src={`images/hotels/${this.props.data.image}`} alt="hotel" />
        </Col>

        <Col className="box-amenities" lg={4} md={4} sm={3} xs={12}>
          <h4>{this.props.data.name}</h4>
            {stars}
          <br />
            {amenities}
        </Col>

        <Col lg={3} md={3} sm={4} xs={12} className="box-price">
          <p className="desc-text text-center">
            Precio por noche de habitación
          </p>

          <div className="text-center">
            <span className="price-text ">
              {"ARS "}
            </span>
            <span className="price-number ">
            {this.props.data.price.toFixed(2).slice(0, -3)}
            </span>

          </div>
          <div className="text-center">
            <Button size="btn-lg" value="Ver hotel" />
          </div>

        </Col>
      </div>


    );
  }
}
export default Item;
// <img src={img} alt={imgName} />
            // <img src="10210122_194_b.jpg" width="190" height="50" className="img-hotel" />

        // <Grid />
        // <Row />
        // <Col />


        // <Grid fluid={true}>
        //   <Row className="show-grid" >
        //     <Col lg={8} md={8} xs={12} sm={9} >


        //     </Col>
        //   </Row>
        // </Grid>
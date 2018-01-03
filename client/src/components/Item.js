import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


// var imgName = "10210122_194_b.jpg";
// const img = require(`../assets/images/hotels/${imgName}`)

// import img from `../assets/images/hotels/${imgName}`;

class Item extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: true,
    };
  }

  render() {

    return (
      <div>


        <Grid fluid="true">
          <Row className="show-grid" >
            <Col xs={12} sm={6} md={8} lg={8}>


              <div className="item-hotel">
                  <img src="images/hotels/10210122_194_b.jpg" className="img-hotel" alt="hotel" />
              </div>
            </Col>
          </Row>
        </Grid>

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
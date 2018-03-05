import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import shipping from '../assets/images/ic_shipping.png';

class Item extends Component {

  static propTypes = {
    data: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  render() {
    const item = this.props.data
    const currency = item.price.currency === "ARS" ? "$" : item.price.currency;
    const freeShipping = item.free_shipping === true ? (<img src={shipping} className="img-shipping" alt="shipping" />) : ""
    return (
      <div className="col-sm-12 col-md-12 col-lg-12 product-list no-padding">
        <Link to={`/items/${item.id}`}>
          <div className="box-img">
            <img ref="product" src={item.picture} alt="product" />
          </div>

          <div className="col-sm-5 col-md-5 col-lg-5 box-description no-padding">
            <div className="price-text">
              {currency + " " + item.price.amount + (item.price.decimals !== null ? "." + item.price.decimals : "") + " "} {freeShipping}
            </div>
            <p className="title">{item.title}</p>
          </div>

          <div className="col-sm-3 col-md-3 col-lg-3 box-price">
          </div>
        </Link>
      </div>
    );
  }
}
export default Item;

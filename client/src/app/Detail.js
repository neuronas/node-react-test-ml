import React, { Component } from 'react';

import LoadingOverlay from '../components/LoadingOverlay';

class Detail extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this)
    this.getDetails = this.getDetails.bind(this);

    this.state = {"details": null, loading: false}
  }

  componentWillMount() {
    if (this.props.id !== null) {
      this.getDetails(this.props.match.params.id)
    }
  }

  getDetails(id) {
    this.setState({loading: true})
    let method, params
    if (id) {
      method = "/api/items/" + id
      params = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "GET"
      }
    }

    fetch(method, params)
    .then((res) => {
      return res.json()
    }).then((data) => {
      this.setState({loading: false, details: data})
    })
    .catch((res) => {
      console.log(res)
    })
  }

  onChange(param) {
    this.setState({filters: param})
  }

  render() {
    const details = this.state.details !== null ? this.state.details : null
    let condition, currency;
    if (details !== null) {
      currency = details.item.price.currency === "ARS" ? "$" : details.item.price.currency;
      if (details.item.condition === "new") {
        condition = "Nuevo"
      } else if (details.item.condition === "used") {
        condition = "Usado"
      }
    }
    return (
      <div className="col-sm-12 col-md-12 col-lg-12 no-padding">
      {
        this.state.loading
      ?
        <LoadingOverlay />
      :
      <div>
        {
          details !== null
        ?
          <div className="col-sm-12 col-md-12 col-lg-12 product-detail">
            <div className="col-left">

              <div className="col-sm-12 col-md-12 col-lg-12 box-img no-padding">
                <img ref="product" src={details.item.picture} alt="product" />
              </div>

              <div className="col-sm-12 col-md-12 col-lg-12 description-text no-padding">
                <p className="title">Descripción del producto</p>
                {details.item.description}
              </div>

            </div>

            <div className="col-right">

              <div className="col-sm-12 col-md-12 col-lg-12 box-detail no-padding">
                <p className="detail-text">{condition + " - " + details.item.sold_quantity + " vendidos"}</p>
                <p className="title">{details.item.title}</p>
                <div className="price-text">
                {currency + " " + details.item.price.amount + (details.item.price.decimals !== null ? "." + details.item.price.decimals : "")}
                </div>
                <input type="button" value="Comprar" className="btn btn-secondary ml-button-lg"/>
              </div>

            </div>

          </div>
        :
          ""
        }
        </div>

      }
      </div>

    );
  }
}
export default Detail;

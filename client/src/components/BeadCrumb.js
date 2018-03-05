import React, { Component } from 'react';

class BeadCrumb extends Component {

  render() {
    let categories = typeof this.props.categories !== 'undefined' ? this.props.categories : null
    let breadCrumb = []
    if (categories !== null) {
      categories.forEach((val, key) => {
        breadCrumb.push(val)
      })
    }

    const len = breadCrumb.length;
    return (
      <div className="bread-crumb-container">
        <div className="bread-crumb">
          <ul>
          {breadCrumb.map((val, key) => {
            if (len === key + 1) {
              return (<li key={key} className="bold">{val}</li>)
            } else {
              return (<li key={key}>{val + ">"}</li>)
            }
          })}
          </ul>
        </div>
      </div>
    );
  }
}
export default BeadCrumb;

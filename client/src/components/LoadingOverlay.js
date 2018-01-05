import React, { Component } from 'react';

export default class LoadingOverlay extends Component {

  render() {
    return (
      
      <div className="overlay">
        <span className="glyphicon glyphicon-refresh glyphicon-spin"></span>
      </div>
    );
  }
}

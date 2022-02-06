import React, { Component } from "react";
class RegComp extends Component {
  state = {};
  render() {
      console.log('reg component');
    return <div> reg comp - {this.props.name}</div>;
  }
}

export default RegComp;

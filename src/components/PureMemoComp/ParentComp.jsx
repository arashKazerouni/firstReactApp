import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";
class ParentComp extends Component {
  state = {
    name: "arash",
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "arash" });
    }, 1000);
  }
  render() {
      console.log('parent component');
    return (
      <div>
        parent component
        <RegComp name={this.state.name} />
        {/* <PureComp/> */}
        <MemoComp name={this.state.name}/>
      </div>
    );
  }
}

export default ParentComp;

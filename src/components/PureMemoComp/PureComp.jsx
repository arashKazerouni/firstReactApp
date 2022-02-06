import { PureComponent } from "react/cjs/react.development";
class PureComp extends PureComponent {
  render() {
      console.log('pure component');
    return <div>pure comp - {this.props.name}</div>;
  }
}
export default PureComp;

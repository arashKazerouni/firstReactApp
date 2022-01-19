import Product from "./components/Product/Product";
import { Component } from "react/cjs/react.development";
class App extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>shopping app</h2>
        <Product name="react" price="12$" />
        <Product name="vue" price="10$" />
        <Product name="angular" price="8$" />
      </>
    );
  }
}

export default App;

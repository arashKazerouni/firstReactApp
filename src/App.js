import Product from "./components/Product/Product";
import { Component } from "react/cjs/react.development";
class App extends Component {
  state = {
    products: [
      { name: "react", price: "100$" },
      { name: "vuejs", price: "90$" },
      { name: "angular", price: "80$" },
    ],
  };
  changeHandler = () => {
    this.setState({
      products: [
        { name: "react", price: "50$" },
        { name: "vuejs", price: "45$" },
        { name: "angular", price: "40$" },
      ],
    });
  };
  render() {
    return (
      <>
        <h2>shopping app</h2>
        {this.state.products.map((product) => {
          return <Product name={product.name} price={product.price} />;
        })}
        <button onClick={this.changeHandler}>Change Prices</button>
      </>
    );
  }
}

export default App;

import ProductList from "./ProductList";
import Navbar from "./components/Navbar/Navbar";
import { Component } from "react/cjs/react.development";
import Product from "./components/Product/Product";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import Wrapper from "./components/hoc/Wrapper";
import styles from "./App.css"
import ClickCounter from "./components/hocExample/ClickCounter";
import HoverCounter from "./components/hocExample/HoverCounter";
import ParentComp from "./components/PureMemoComp/ParentComp";
import ClassRef from "./components/ref/ClassRef";
import FunctinalRef from "./components/ref/FunctionalRef";
class App extends Component {
  constructor(props) {
    super(props);
    // console.log("app.js constructor");
  }

  state = {
    products: [
      { name: "react", price: "100$", id: 1, quantity: 1 },
      { name: "vuejs", price: "90$", id: 2, quantity: 2 },
      { name: "angular", price: "80$", id: 3, quantity: 3 },
    ],
    isShow: true,
  };

  removeHandler = (id) => {
    const products = [...this.state.products];
    const filteredProduct = products.filter((p) => p.id !== id);
    this.setState({ products: filteredProduct });
  };

  incrementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    product.quantity++;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  decrementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    if (product.quantity === 1) {
      const filteredProducts = this.state.products.filter((p) => p.id !== id);
      this.setState({ products: filteredProducts });
    } else {
      const products = [...this.state.products];
      product.quantity--;
      products[index] = product;
      console.log(products);
      this.setState({ products });
    }
  };

  changeHandler = (event, id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    product.name = event.target.value;
    const products = [...this.state.products];
    products[index].name = product.name;
    this.setState({ products });
  };

  componentDidMount() {
    // console.log("App.js componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("app.js componentDidUpdate");
    // console.log(prevState);
  }

  render() {
    // console.log("app.js render ");
    return (
      <>
      <FunctinalRef/>
        {/* <Navbar
          totalItems={this.state.products.filter((p) => p.quantity > 0).length}
        />
        <ProductList
          products={this.state.products}
          onRemove={this.removeHandler}
          onIncrement={this.incrementHandler}
          onDecrement={this.decrementHandler}
          onChange={this.changeHandler}
        /> */}
      </>
    );
  }
}

export default Wrapper(App, "container");

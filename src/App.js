import ProductList from "./ProductList";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { Component } from "react/cjs/react.development";

class App extends Component {
  state = {
    products: [
      { name: "react", price: "100$", id: 1, quantity: 1 },
      { name: "vuejs", price: "90$", id: 2, quantity: 2 },
      { name: "angular", price: "80$", id: 3, quantity: 3 },
    ],
  };

  removeHandler = (id) => {
    const filteredProduct = this.state.products.filter((p) => p.id !== id);
    this.setState(filteredProduct);
  };

  incrementHandler = (id) => {
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.quantity++;
    this.setState(products);
  };

  decrementHandler = (id) => {
    const products = [...products];
    const selectedItem = products.find((p) => p.id === id);
    if (selectedItem.quantity === 1) {
      const filteredProduct = products.filter((p) => p.id !== id);
      this.setState(filteredProduct);
    } else {
      selectedItem.quantity--;
      this.setState(products);
    }
  };

  changeHandler = (event, id) => {
    const products = [...products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.name = event.target.value;
    this.setState(products);
  };

  render() {
    return (
      <div className={styles.container}>
        <h1>shopping app</h1>
        <Navbar totalItems={this.state.products.filter((p) => p.quantity > 0).length} />
        <ProductList
          products={this.products}
          onRemove={this.removeHandler}
          onIncrement={this.incrementHandler}
          onDecrement={this.decrementHandler}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}

export default App;

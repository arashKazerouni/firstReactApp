import { useState } from "react";
import ProductList from "./ProductList";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  const [products, setProduct] = useState([
    { name: "react", price: "100$", id: 1, quantity: 1 },
    { name: "vuejs", price: "90$", id: 2, quantity: 2 },
    { name: "angular", price: "80$", id: 3, quantity: 3 },
  ]);

  const removeHandler = (id) => {
    const filteredProduct = products.filter((p) => p.id !== id);
    setProduct(filteredProduct);
  };

  const incrementHandler = (id) => {
    const productsClone = [...products];
    const selectedItem = productsClone.find((p) => p.id === id);
    selectedItem.quantity++;
    setProduct(productsClone);
  };

  const decrementHandler = (id) => {
    const productsClone = [...products];
    const selectedItem = productsClone.find((p) => p.id === id);
    if (selectedItem.quantity === 1) {
      const filteredProduct = productsClone.filter((p) => p.id !== id);
      setProduct(filteredProduct);
    } else {
      selectedItem.quantity--;
      setProduct(productsClone);
    }
  };

  const changeHandler = (event, id) => {
    const productsClone = [...products];
    const selectedItem = productsClone.find((p) => p.id === id);
    selectedItem.name = event.target.value;
    setProduct(productsClone);
  };

  return (
    <div className={styles.container}>
      <h1>shopping app</h1>
      <Navbar totalItems={products.filter((p)=> p.quantity> 0).length}/>
      <ProductList
        products={products}
        onRemove={removeHandler}
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
        onChange={changeHandler}
      />
    </div>
  );
};

export default App;

import Product from "./components/Product/Product";
import { useState } from "react";
import styles from "./App.module.css"
const App = () => {
  const [products, setProduct] = useState([
    { name: "react", price: "100$", id: 1 },
    { name: "vuejs", price: "90$" ,id: 2},
    { name: "angular", price: "80$" ,id: 3},
  ]);

  const changeHandler = () => {
    setProduct([
      { name: "react", price: "50$" },
      { name: "vuejs", price: "45$" },
      { name: "angular", price: "40$" },
    ]);
  };
  return (
    <div className={styles.container}>
       <h2>shopping app</h2>
      {products.map((product) => {
        return <Product name={product.name} price={product.price} key={product.id} />;
      })}
      <button onClick={changeHandler}>Change Prices</button>
    </div>
  );
};

export default App;

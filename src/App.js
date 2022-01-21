import { useState } from "react";
import ProductList from "./ProductList";
import styles from "./App.module.css"
const App = () => {
  const [products, setProduct] = useState([
    { name: "react", price: "100$", id: 1 },
    { name: "vuejs", price: "90$" ,id: 2},
    { name: "angular", price: "80$" ,id: 3},
  ]);

 
  return (
    <div className={styles.container}>
       <h2>shopping app</h2>
      <ProductList />
      
    </div>
  );
};

export default App;

import { useState } from "react";
import ProductList from "./ProductList";
import styles from "./App.module.css"
const App = () => {

  return (
    <div className={styles.container}>
       <h1>shopping app</h1>
      <ProductList />
      
    </div>
  );
};

export default App;

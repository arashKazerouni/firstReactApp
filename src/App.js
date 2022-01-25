import { useState } from "react";
import ProductList from "./ProductList";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <div className={styles.container}>
      <h1>shopping app</h1>
      <Navbar />
      <ProductList />
    </div>
  );
};

export default App;

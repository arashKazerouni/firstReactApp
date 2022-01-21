import { useState } from "react";
import styles from "./product.module.css";
const Product = (props) => {
  return (
    <div className={styles.product}>
      <p>name : {props.name}</p>
      <p>price : {props.price}</p>
    </div>
  );
};

export default Product;

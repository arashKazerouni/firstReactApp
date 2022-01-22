import { useState } from "react";
import styles from "./product.module.css";

const Product = (props) => {
  return (
    <div className={styles.product}>
      <p>name : {props.name}</p>
      <p>price : {props.price}</p>
      <p className={styles.quantity}>{props.quantity}</p>
      <button className={styles.increment}>increment</button>
      <button onClick={props.onDelete}>delete</button>
    </div>
  );
};

export default Product;

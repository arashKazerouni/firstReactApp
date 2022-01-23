import { useState } from "react";
import styles from "./product.module.css";

const Product = (props) => {
  return (
    <div className={styles.product}>
      <p>name : {props.product.name} course</p>
      <p>price : {props.product.price}</p>
      <span className={styles.quantity}>{props.product.quantity}</span>
      <input type="text" onChange={props.onChange}  value={props.product.name}/>
      <button onClick={props.onIncrement} className={styles.increment}>
        increment
      </button>
      <button onClick={props.onDecrement}>decrement</button>
      <button onClick={props.onDelete}>delete</button>
    </div>
  );
};

export default Product;

import { useState } from "react";
import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";
import { render } from "@testing-library/react";

const Product = ({onChange,onIncrement,onDecrement,product,onDelete}) => {
  console.log("Product.js redner");
  return (
    <div className={styles.product}>
      <p>name : {product.name} course</p>
      <p>price : {product.price}</p>
      <span className={styles.quantity}>{product.quantity}</span>
      <input type="text" onChange={onChange} value={product.name} />
      <button onClick={onDecrement} className={product.quantity <2 ? styles.red:undefined}>
        {product.quantity > 1 ? "-" : <BiTrash/>}
      </button>
      <button onClick={onIncrement} className={styles.increment}>+</button>
      <button onClick={onDelete}>delete</button>
    </div>
  );
};

export default Product;

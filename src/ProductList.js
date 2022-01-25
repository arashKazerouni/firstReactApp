import React, { Component } from "react";
import { useState } from "react";
import Product from "./components/Product/Product";
import styles from "./components/Product/product.module.css"
const ProductList = ({products,onRemove,onIncrement,onDecrement,onChange}) => {
  const renderProduct = () => {
    if (products.length === 0) return <div className={styles.noProduct}>there is no product for you</div>;
    return (
      <div>
        {products.map((product) => {
          return (
            <Product
              product={product}
              key={product.id}
              onDelete={() => onRemove(product.id)}
              onIncrement={() => onIncrement(product.id)}
              onDecrement={() => onDecrement(product.id)}
              onChange={(e) => onChange(e, product.id)}
            />
          );
        })}
      </div>
    );
  }

  return(renderProduct())
};

export default ProductList;

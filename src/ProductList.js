import React, { Component } from "react";
import { useState } from "react";
import Product from "./components/Product/Product";
import styles from "./components/Product/product.module.css";

class ProductList extends Component {
  renderProduct = () => {
    const { onRemove, onIncrement, onDecrement, onChange, products } =
      this.props;
    if (products.length === 0)
      return (
        <div className={styles.noProduct}>there is no product for you</div>
      );

    return products.map((product) => {
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
    });
  };

  render() {
    console.log("productList.js render");
    return <div>{this.renderProduct()}</div>;
  }
}
export default ProductList;

import React, { Component } from "react";
import { useState } from "react";
import Product from "./components/Product/Product";
const ProductList = (props) => {
  const renderProduct = () => {
    if (props.products.length === 0) return <div>there is no product for you</div>;
    return (
      <div>
        {props.products.map((product) => {
          return (
            <Product
              product={product}
              key={product.id}
              onDelete={() => props.onRemove(product.id)}
              onIncrement={() => props.onIncrement(product.id)}
              onDecrement={() => props.onDecrement(product.id)}
              onChange={(e) => props.onChange(e, product.id)}
            />
          );
        })}
      </div>
    );
  }

  return(renderProduct())
};

export default ProductList;

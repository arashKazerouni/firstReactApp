import React, { Component } from "react";
import { useState } from "react";
import Product from "./components/Product/Product";
const ProductList = () => {
  const [products, setProduct] = useState([
    { name: "react", price: "100$", id: 1, quantity: 1 },
    { name: "vuejs", price: "90$", id: 2, quantity: 2 },
    { name: "angular", price: "80$", id: 3, quantity: 3 },
  ]);

  const removeHandler = (id) => {
    const filteredProduct = products.filter((p) => p.id !== id);
    setProduct(filteredProduct);
  };

  const incrementHandler = (id) => {
    const productsClone = [...products];
    const selectedItem = productsClone.find((p) => p.id === id);
    selectedItem.quantity++;
    setProduct(productsClone);
  };

  const decrementHandler = (id) => {
    const productsClone = [...products];
    const selectedItem = productsClone.find((p) => p.id === id);
    if (selectedItem.quantity !== 0) {
      selectedItem.quantity--;
    }
    setProduct(productsClone);
  };

  const changeHandler = (event, id) => {
    const productsClone = [...products];
    const selectedItem = productsClone.find((p) => p.id === id);
    selectedItem.name = event.target.value;
    setProduct(productsClone)
  };

  return (
    <>
      {products.map((product) => {
        return (
          <Product
            product={product}
            key={product.id}
            onDelete={() => removeHandler(product.id)}
            onIncrement={() => incrementHandler(product.id)}
            onDecrement={() => decrementHandler(product.id)}
            onChange={(e) => changeHandler(e, product.id)}
          />
        );
      })}
    </>
  );
};

export default ProductList;

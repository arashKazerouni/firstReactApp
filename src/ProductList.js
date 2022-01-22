import React, { Component } from "react";
import { useState } from "react";
import Product from "./components/Product/Product";
const ProductList = () => {
  const [products, setProduct] = useState([
    { name: "react", price: "100$", id: 1, quantity:1 },
    { name: "vuejs", price: "90$", id: 2, quantity:1 },
    { name: "angular", price: "80$", id: 3, quantity:1 },
  ]);

  const removeHandler = (id) => {
    const filteredProduct = products.filter((p) => p.id !== id);
    setProduct(filteredProduct);
  };

  return (
    <>
      {products.map((product) => {
        return (
          <Product
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            key={product.id}
            onDelete={() => removeHandler(product.id)}
          />
        );
      })}
    </>
  );
};

export default ProductList;

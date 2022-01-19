import Product from "./components/Product/Product";
import { useState } from "react";

const App = () => {
  const [prodcuts, setProduct] = useState([
    { name: "react", price: "100$" },
    { name: "vuejs", price: "90$" },
    { name: "angular", price: "80$" },
  ]);

  const changeHandler = () => {
    setProduct([
      { name: "react", price: "50$" },
      { name: "vuejs", price: "45$" },
      { name: "angular", price: "40$" },
    ]);
  };
  return (
    <>
      <h2>shopping app</h2>
      {prodcuts.map((product) => {
        return <Product name={product.name} price={product.price} />;
      })}
      <button onClick={changeHandler}>Change Prices</button>
    </>
  );
};

export default App;

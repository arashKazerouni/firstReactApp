import React, { Component } from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import styles from "./Navbar.module.css";
const Navbar = (props) => {
  return (
    <>
      <nav className={styles.navbar}>
        <BsFillBasket2Fill className={styles.icon} />
        <span className={styles.counter}>{props.totalItems}</span>
      </nav>
    </>
  );
};

export default Navbar;

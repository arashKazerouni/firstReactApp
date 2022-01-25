import React, { Component } from 'react';
import { BsFillBasket2Fill } from "react-icons/bs";
import styles from "./Navbar.module.css"
class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <section>
                <nav className={styles.navbar}>
                <BsFillBasket2Fill className={styles.icon} />
                <span className={styles.counter}>
                    1
                </span>
                </nav>
            </section>
        );
    }
}
 
export default Navbar;
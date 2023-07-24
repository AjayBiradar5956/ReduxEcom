import React from 'react';
import styles from '../styles/navbar.module.css';
class Navbar extends React.Component {
    render() {
        return (
            <div className={styles.navbarContainer}>
                <h1>
                    ECOM101
                </h1>
                <h2>CartItems:</h2>
            </div>
        )
    }
}
export default Navbar;
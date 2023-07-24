import React from 'react';
import styles from '../styles/navbar.module.css';
class Navbar extends React.Component {
    render() {
        return (
            <div className={styles.navbarContainer}>
                <h1 style={{ marginLeft: '25px' }}>
                    ECOM101
                </h1>
                <h2 style={{ marginRight: '80px' }}>CartItems:</h2>
            </div>
        )
    }
}
export default Navbar;
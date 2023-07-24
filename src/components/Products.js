import React from 'react';
import styles from '../styles/cart.module.css';
import { addProducts } from '../actions';
import { connect } from 'react-redux';

class Products extends React.Component {
    async componentDidMount() {
        try {
            const response = await fetch('https://my-json-server.typicode.com/ajaybiradar5956/ReduxEcom/products');
            const data = await response.json();
            this.props.dispatch(addProducts(data));
            console.log(this.props);
        } catch (err) {
            console.log(err);
            return;
        }
    }
    render() {
        const { products } = this.props;
        return (
            <div className={styles.cartContainer}>
                <h1 style={{ textAlign: 'center', paddingTop: '20px' }}>Products</h1>
                {products.map((product) => {
                    return <div className={styles.cartItem} key={product.userId}>
                        <img src='/img/iphone.jpg' alt='Iphone' />
                        <ul className={styles.cartItemDetail} style={{ marginRight: '35px' }}>
                            <li><h1>{product.name}</h1></li>
                            <li><h3>Price: {product.price}</h3></li>
                        </ul>
                        <span>
                            <ul className={styles.cartItemDetail}>
                                <li><h3>Description:</h3></li>
                                <li><p style={{ wordWrap: 'break-word', width: '200px', height: '110px' }}>{product.description}</p></li>
                            </ul>
                        </span>
                        <span>
                            <button className={styles.addToCart}>ADD TO CART</button>
                        </span>
                        <span>
                            <i class="fa-solid fa-pen-to-square"
                                style={{ position: 'absolute', right: '75px', fontSize: '1.8rem' }}>

                            </i>
                        </span>
                        <span>
                            <i class="fa-solid fa-trash"
                                style={{ position: 'absolute', right: '25px', fontSize: '1.8rem' }}>
                            </i>
                        </span>
                    </div>
                })}
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
    }
}

const connectedAppComponent = connect(mapStateToProps)(Products);

export default connectedAppComponent;
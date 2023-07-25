import React from "react";
import styles from '../styles/product.module.css'
import { addProducts, addToCart, removeFromCart } from '../actions';
import { connect } from 'react-redux';

class HomePage extends React.Component {

    async componentDidMount() {
        try {
            const response = await fetch('https://my-json-server.typicode.com/ajaybiradar5956/ReduxEcom/products');
            const data = await response.json();
            this.props.dispatch(addProducts(data));
        } catch (err) {
            console.log(err);
            return;
        }
    }

    handleAddToCart = (id) => {
        this.props.dispatch(addToCart(id));
    }

    handleRemoveToCart = (id) => {
        this.props.dispatch(removeFromCart(id));
    }
    render() {
        const { cartItems, products, setShowCart } = this.props;
        const displayView = setShowCart ? cartItems : products;
        return (
            <div className={styles.productContainer}>
                <h1 style={{ textAlign: 'center', paddingTop: '20px' }}>
                    {setShowCart ? "Cart Items" : "Products"}
                </h1>
                {(cartItems.length === 0) && (setShowCart === true)
                    ? <h2 style={{ textAlign: 'center' }}>No Items added to Cart</h2>
                    :
                    <></>
                }
                {displayView.map((data, index) => {
                    return <div className={styles.productItem} key={data.userId}>

                        {/* Seriel Number */}
                        <span className={styles.productSeriel}>
                            {`${index + 1}.`}
                        </span>

                        {/* Product Img */}
                        <img src={data.img} alt={data.name} />

                        {/* Product Name and price */}
                        <ul className={styles.productItemDetail}>
                            <li><h1>{data.name}</h1></li>
                            <li><h3>Price: {data.price}</h3></li>
                        </ul>

                        {/* Product Description */}
                        <span>
                            <ul className={styles.productItemDescription}>
                                <li><h3>Description:</h3></li>
                                <li><p style={{ wordWrap: 'break-word' }}>{data.description}</p></li>
                            </ul>
                        </span>

                        {/* Buttons */}
                        {setShowCart
                            ?
                            <>
                                <span>
                                    <button className={styles.addToCart} onClick={() => { this.handleRemoveToCart(data.userId) }}>
                                        REMOVE
                                    </button>
                                </span></>
                            :
                            <>
                                <span>
                                    <button className={styles.addToCart} onClick={() => { this.handleAddToCart(data.userId) }}>
                                        ADD TO CART
                                    </button>
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
                            </>}
                    </div>
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
        cartItems: state.cartItems,
        setShowCart: state.setShowCart,
        toAddNewProduct: state.toAddNewProduct,
    }
}

const connectedAppComponent = connect(mapStateToProps)(HomePage);

export default connectedAppComponent;

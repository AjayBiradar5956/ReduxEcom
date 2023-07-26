import React from "react";
import styles from '../styles/product.module.css'
import { addProducts, addToCart, removeFromCart, deleteProduct } from '../actions';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: false,
        };
    }

    handleGetProducts = async () => {
        try {
            const response = await fetch('https://my-json-server.typicode.com/ajaybiradar5956/ReduxEcom/products', {
                method: 'GET',
            });
            const data = await response.json();

            this.props.dispatch(addProducts(data));

        } catch (err) {
            console.log(err);
            return;
        }
    }

    handleSort = () => {
        if (this.state.sort === false) {
            toast.success("Sorted By Price...", {
                position: 'top-center',
            });
        } else {
            toast.success("Removed Sort", {
                position: 'top-center',
            });
        }
        this.setState((prevState) => ({
            sort: !prevState.sort, // Toggle the sort state between true and false
        }));
    }

    handleAddToCart = (id) => {
        toast.success("Added to Cart", {
            position: 'top-right',
        });
        this.props.dispatch(addToCart(id));
    }

    handleRemoveToCart = (id) => {
        toast.success("Removed from Cart");
        this.props.dispatch(removeFromCart(id));
    }

    handleDelete = (id) => {
        toast.success("Product Deleted");
        this.props.dispatch(deleteProduct(id));
    }
    render() {
        const { cartItems, products, setShowCart } = this.props;
        const displayView = setShowCart ? cartItems : products;
        const sortedDisplayView =
            this.state.sort
                ? [...displayView].sort((item1, item2) => item1.price - item2.price)
                : displayView;
        return (
            <div className={styles.productContainer}>
                <div>
                    <h1 style={{ textAlign: 'center', paddingTop: '15px' }}>
                        {setShowCart ? "Cart Items" : "Home"}
                    </h1>
                    <span className={styles.mainBtn}>
                        {setShowCart
                            ?
                            <></>
                            :
                            <button
                                onClick={() => { this.handleGetProducts() }}
                                className={styles.sort}>
                                Get Products
                            </button>
                        }
                        {setShowCart
                            ?
                            <></>
                            :
                            <button
                                onClick={() => { this.handleSort(true) }}
                                className={styles.sort}
                                disabled={products.length === 0}
                            >
                                {this.state.sort
                                    ?
                                    "Sort By Price ❌"
                                    :
                                    "Sort By Price"
                                }
                            </button>
                        }
                    </span>
                </div>
                {(cartItems.length === 0) && (setShowCart === true)
                    ? <h2 style={{ textAlign: 'center', fontWeight: '500' }}>No Items added to Cart</h2>
                    : <></>
                }
                {sortedDisplayView.map((data, index) => {
                    return <div className={styles.productItem} key={data.id}>

                        {/* Seriel Number */}
                        <span className={styles.productSeriel}>
                            {`${index + 1}.`}
                        </span>

                        {/* Product Img */}
                        <img src={data.img} alt={data.name} />

                        {/* Product Name and price */}
                        <ul className={styles.productItemDetail}>
                            <li>
                                <h1 style={{ position: 'absolute', left: '0px', top: '0px' }} >{data.name}</h1>
                            </li>
                            <li>
                                <h3 style={{ position: 'absolute', left: '20px', top: '40px' }}>
                                    Price: {data.price}</h3>
                            </li>
                            {/* <li>
                                <h3 style={{ position: 'absolute', left: '20px', top: '70px' }}>Rating: {data.rating}
                                </h3>
                            </li> */}
                        </ul>

                        {/* Product Description
                        <span>
                            <ul className={styles.productItemDescription}>
                                <li><h3>Description:</h3></li>
                                <li><p style={{ wordWrap: 'break-word' }}>{data.description}</p></li>
                            </ul>
                        </span> */}

                        {/* Buttons */}
                        {setShowCart
                            ?
                            <>
                                <span>
                                    <button className={styles.addToCart} onClick={() => { this.handleRemoveToCart(data.id) }}>
                                        REMOVE
                                    </button>
                                </span></>
                            :
                            <>
                                <span>
                                    <button className={styles.addToCart} onClick={() => { this.handleAddToCart(data.id) }}>
                                        ADD TO CART
                                    </button>
                                </span>

                                <span className={styles.onh}>
                                    <i class="fa-solid fa-pencil"
                                        style={{ position: 'absolute', right: '130px', fontSize: '1.8rem', top: '60px' }}>
                                    </i>
                                </span>

                                <span className={styles.onh}>
                                    <i class="fa-solid fa-eye"
                                        style={{ position: 'absolute', right: '75px', fontSize: '1.8rem', top: '60px' }}>
                                    </i>
                                </span>
                                <span className={styles.onh}>
                                    <i class="fa-solid fa-trash"
                                        style={{ position: 'absolute', right: '25px', fontSize: '1.8rem', top: '60px' }}
                                        onClick={() => { this.handleDelete(data.id) }}
                                    >

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

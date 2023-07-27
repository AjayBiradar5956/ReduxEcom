import React from "react";
import { connect } from 'react-redux';
import styles from '../styles/product.module.css';
import { toast } from 'react-toastify';
import { addToCart, removeFromCart, deleteProduct, setViewPage } from '../actions';

class SingleProduct extends React.Component {
    handleAddToCart = (id) => {
        toast.success("Added to Cart", {
            position: 'top-center',
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

    handleView = (val) => {
        toast.success("Product Details", {
            position: 'top-center',
        })
        this.props.dispatch(setViewPage(val));
    }
    render() {
        const { data } = this.props;
        const { setShowCart } = this.props;
        return (
            <div className={styles.productItem} key={data.id}>

                {/* Seriel Number */}
                {setShowCart
                    ?
                    <></>
                    :
                    <span className={styles.productSeriel}>
                        {`${data.id}.`}
                    </span>
                }


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

                        <span className={styles.onh} onClick={() => { this.handleView(true) }}>
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
        )
    }
}

function mapStateToProps(state) {
    return {
        setShowCart: state.setShowCart,
    }
}

const connectedAppComponent = connect(mapStateToProps)(SingleProduct);

export default connectedAppComponent;
import React from "react";
import { connect } from 'react-redux';
import styles from '../styles/detail.module.css';
import { toast } from 'react-toastify';
import { addToCart } from '../actions';

class DetailPage extends React.Component {
    handleAddToCart = (id) => {
        toast.success("Added to Cart", {
            position: 'top-center',
        });
        this.props.dispatch(addToCart(id));
    }
    render() {
        const { products, viewId, setShowCart } = this.props;
        const data = products.find((item) => item.id === viewId);
        console.log(data);
        return (

            <div className={styles.prodContainer}>
                <div className={styles.title}>
                    <h1>Product Detail</h1>
                </div>
                <div className={styles.productItem} key={data.id}>

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
                        <li>
                            <h3 style={{ position: 'absolute', left: '20px', top: '70px' }}>Rating: {data.rating}
                            </h3>
                        </li>
                    </ul>

                    {/* Product Description */}
                    <span>
                        <ul className={styles.productItemDescription}>
                            <li><h3 style={{ position: 'absolute', top: '40px' }}>Description:</h3></li>
                            <li><p style={{ position: 'absolute', top: '90px' }}>{data.description}</p></li>
                        </ul>
                    </span>

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

                        </>
                    }
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        products: state.products,
        viewId: state.viewId,
        setShowCart: state.setShowCart,
    }
}

const connectedAppComponent = connect(mapStateToProps)(DetailPage);

export default connectedAppComponent;
import React from 'react';
import NewProduct from '../pages/NewProduct';
import HomePage from '../pages/HomePage';
import { connect } from 'react-redux';

class Products extends React.Component {
    render() {
        const { toAddNewProduct } = this.props;
        return (
            <div>
                {toAddNewProduct
                    ?
                    <NewProduct />
                    :
                    <HomePage />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        toAddNewProduct: state.toAddNewProduct,
    }
}

const connectedAppComponent = connect(mapStateToProps)(Products);

export default connectedAppComponent;



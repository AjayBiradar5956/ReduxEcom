import React from 'react';
import NewProduct from '../pages/NewProduct';
import HomePage from '../pages/HomePage';
import { connect } from 'react-redux';

class Products extends React.Component {
    render() {
        const { toAddNewProduct, setViewPage } = this.props;
        if (toAddNewProduct) {
            return <NewProduct />;
        } else if (!toAddNewProduct && setViewPage) {
            return <h1>hi</h1>
        }
        else {
            return <HomePage />;
        }

    }
}

function mapStateToProps(state) {
    return {
        toAddNewProduct: state.toAddNewProduct,
        setViewPage: state.setViewPage,
    }
}

const connectedAppComponent = connect(mapStateToProps)(Products);

export default connectedAppComponent;



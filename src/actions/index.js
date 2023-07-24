export const ADD_PRODUCT = 'ADD_PRODUCT';

export function addProducts(products) {
    console.log('add product action hit');
    return {
        type: ADD_PRODUCT,
        products,
    }
}
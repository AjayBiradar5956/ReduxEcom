import {
    ADD_PRODUCT,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_SHOW_CART,
    SET_ADD_A_NEW_PRODUCT,
    ADD_NEW_PRODUCT
}
    from "../actions";

const inititalState = {
    products: [],
    cartItems: [],
    setShowCart: false,
    toAddNewProduct: false,
}

export function product(state = inititalState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: action.products,
            }
        case ADD_TO_CART:
            const productToAdd = state.products.find((item) => item.userId === action.id);
            return {
                ...state,
                cartItems: [productToAdd, ...state.cartItems],
            }
        case SET_SHOW_CART:
            return {
                ...state,
                setShowCart: action.val,
            }
        case REMOVE_FROM_CART:
            state.cartItems = state.cartItems.filter((item) => item.userId !== action.id);
            return {
                ...state,
                cartItems: state.cartItems,
            }
        case SET_ADD_A_NEW_PRODUCT:
            return {
                ...state,
                toAddNewProduct: action.val,
            }
        case ADD_NEW_PRODUCT:
            console.log(state.products);
            return {
                ...state,
                products: [...state.products, action.obj],
            }
        default:
            return state;
    }
}
import {
    ADD_PRODUCT,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_SHOW_CART,
    SET_ADD_A_NEW_PRODUCT,
    ADD_NEW_PRODUCT,
    DELETE_PRODUCT,
    SET_VIEW_PAGE,
}
    from "../actions";

const inititalState = {
    products: [],
    cartItems: [],
    setShowCart: false,
    toAddNewProduct: false,
    setViewPage: false,
    viewId: null,
}

export function product(state = inititalState, action) {
    console.log(state.products);
    switch (action.type) {
        case ADD_PRODUCT:
            console.log("rendering get");
            return {
                ...state,
                products: action.products,
            }
        case ADD_TO_CART:
            const productToAdd = state.products.find((item) => item.id === action.id);
            return {
                ...state,
                cartItems: [...state.cartItems, productToAdd],
            }
        case SET_SHOW_CART:
            return {
                ...state,
                setShowCart: action.val,
            }
        case REMOVE_FROM_CART:
            const updatedCartItems = state.cartItems.filter((item) => item.id !== action.id);
            return {
                ...state,
                cartItems: updatedCartItems,
            };
        case SET_ADD_A_NEW_PRODUCT:
            return {
                ...state,
                toAddNewProduct: action.val,
            }
        case ADD_NEW_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.obj],
            }
        case DELETE_PRODUCT:
            const productArr = state.products.filter((item) => item.id !== action.id);
            return {
                ...state,
                products: productArr,
            };
        case SET_VIEW_PAGE:
            return {
                ...state,
                setViewPage: action.val,
                viewId: action.id,
            }

        default:
            return state;
    }
}
import { ADD_PRODUCT } from "../actions";

const inititalState = {
    products: [],
    cartItems: [],
}

export function product(state = inititalState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: action.products,
            }
        default:
            return state;
    }
}
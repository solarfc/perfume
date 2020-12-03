const ADD_PERFUME_TO_CART = 'cart/ADD_PERFUME_TO_CART';
const REMOVE_PERFUME_FROM_CART = 'cart/REMOVE_PERFUME_FROM_CART';

const initialState = {
    cart: []
};

export const addPerfumeToCart = (perfume) => {
    return {
        type: ADD_PERFUME_TO_CART,
        payload: perfume
    }
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERFUME_TO_CART:
            return {...state, cart: [action.payload, ...state.cart]}
        default:
            return state;
    }
}

export default cartReducer;
const ADD_PERFUME_TO_CART = 'cart/ADD_PERFUME_TO_CART';
const REMOVE_PERFUME_FROM_CART = 'cart/REMOVE_PERFUME_FROM_CART';
const REMOVE_ALL_PERFUME_FROM_CART = 'cart/REMOVE_ALL_PERFUME_FROM_CART';

const initialState = {
    cart: []
};

const getIndex = (state, idx) => {
    return state.findIndex(({id}) => id === idx);
}

const updateCartItems = (cartItems, item, idx) => {
    if(item.count === 0) {
        return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)]
    }
    if(idx === -1) {
        return [...cartItems, item]
    }

    return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)]
}

const updateCartItem = (perfume, item = {}, quantity) => {
    const {count = 0, totalPrice = 0} = item;

    return {
        ...perfume,
        count: count + quantity,
        totalPrice: totalPrice + quantity * perfume.price
    }
}

const updateOrder = (state, payload, quantity) => {
    const perfume = payload;
    const itemIndex = getIndex(state.cart, perfume.id);
    const item = state.cart[itemIndex];
    const newItem = updateCartItem(perfume, item, quantity);

    return {...state, cart: updateCartItems(state.cart, newItem, itemIndex)};

}

const addPerfumeToCart = (perfume) => {
    return {
        type: ADD_PERFUME_TO_CART,
        payload: perfume
    }
}

export const addPerfumeToCartThunkCreator = (perfume) => async (dispatch) => {
    dispatch(addPerfumeToCart(perfume));
};

const removePerfumeFromCart = (perfume) => {
    return {
        type: REMOVE_PERFUME_FROM_CART,
        payload: perfume
    }
}

export const removePerfumeFromCartTC = (perfume) => async (dispatch) => {
    dispatch(removePerfumeFromCart(perfume));
}

const removeAllPerfumeFromCart = (perfume) => {
    return {
        type: REMOVE_ALL_PERFUME_FROM_CART,
        payload: perfume
    }
}

export const removeAllPerfumeFromCartTC = (perfume) => async (dispatch) => {
    dispatch(removeAllPerfumeFromCart(perfume));
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERFUME_TO_CART:
            return updateOrder(state, action.payload, 1);
        case REMOVE_PERFUME_FROM_CART:
            return updateOrder(state, action.payload, -1);
        case REMOVE_ALL_PERFUME_FROM_CART:
            const item = state.cart.find(({id}) => id === action.payload.id);
            return updateOrder(state, action.payload, -item.count);
        default:
            return state;
    }
}

export default cartReducer;
const ADD_PERFUME_TO_CART = 'cart/ADD_PERFUME_TO_CART';
const REMOVE_PERFUME_FROM_CART = 'cart/REMOVE_PERFUME_FROM_CART';

const initialState = {
    cart: []
};

const updateCartItems = (cartItems, item, idx) => {
    if(idx === -1) {
        return [...cartItems, item]
    }

    return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)]
}

const updateCartItem = (perfume, item = {}) => {
    const {count = 0, totalPrice = 0} = item;

    return {
        ...perfume,
        count: count + 1,
        totalPrice: totalPrice + perfume.price
    }
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

const removePerfumeFromCart = (id) => {
    return {
        type: REMOVE_PERFUME_FROM_CART,
        payload: id
    }
}

export const removePerfumeFromCartTC = (id) => async (dispatch) => {
    dispatch(removePerfumeFromCart(id));
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERFUME_TO_CART:
            const perfume = action.payload;
            const itemIndex = state.cart.findIndex(({id}) => id === perfume.id);
            const item = state.cart[itemIndex];
            const newItem = updateCartItem(perfume, item);

            return {...state, cart: updateCartItems(state.cart, newItem, itemIndex)}
        default:
            return state;
    }
}

export default cartReducer;
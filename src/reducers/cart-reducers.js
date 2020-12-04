const ADD_PERFUME_TO_CART = 'cart/ADD_PERFUME_TO_CART';
const REMOVE_PERFUME_FROM_CART = 'cart/REMOVE_PERFUME_FROM_CART';

const initialState = {
    cart: []
};

const addPerfumeToCart = (perfume) => {
    return {
        type: ADD_PERFUME_TO_CART,
        payload: perfume
    }
}

export const addPerfumeToCartThunkCreator = (perfume) => async (dispatch) => {
    dispatch(addPerfumeToCart(perfume));
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERFUME_TO_CART:
            const itemIndex = state.cart.findIndex(({id}) => id === action.payload.id);
            const item = state.cart[itemIndex];

            let newItem;

            if(item) {
                newItem = {
                    ...item,
                    count: item.count + 1
                }
            } else {
                newItem = {...action.payload, count: 1}
            }

            if(itemIndex < 0) {
                return {...state, cart: [...state.cart, newItem]}
            } else {
                return {...state, cart: [...state.cart.slice(0, itemIndex), newItem, ...state.cart.slice(itemIndex + 1)]}
            }
        default:
            return state;
    }
}

export default cartReducer;
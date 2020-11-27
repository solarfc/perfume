const SET_PERFUME_INFO = 'card/SET_PERFUME_INFO';
const initialState = {
    perfume: null
};

export const setPerfumeInfo = (perfume) => {
    debugger;
    return {
        type: SET_PERFUME_INFO,
        payload: perfume
    }
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PERFUME_INFO:
            return {...state, perfume: action.payload}
        default:
            return state;
    }
};

export default cardReducer;
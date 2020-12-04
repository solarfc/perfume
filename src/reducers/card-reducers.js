const SET_PERFUME_INFO = 'card/SET_PERFUME_INFO';
const SET_PERFUME_ID = 'card/SET_PERFUME_ID';

const initialState = {
    id: null,
    perfume: null,
};

const setPerfumeId = (id) => {
    return {
        type: SET_PERFUME_ID,
        payload: id
    }
}

export const setPerfumeIdThunkCreator = (id) => async (dispatch) => {
    dispatch(setPerfumeId(id));
}

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PERFUME_ID:
            return {...state, id: action.payload}
        // case SET_PERFUME_INFO:
        //     return {...state, perfume: action.payload}
        default:
            return state;
    }
};

export default cardReducer;
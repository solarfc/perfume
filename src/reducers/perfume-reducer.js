import {getPerfume} from "../services/service";

const PERFUME_LOADED = 'perfume/PERFUME_LOADED';

const initialState = {
    perfume: [],
    loading: true
};

const perfumeLoaded = (perfume) => {
    return {
        type: PERFUME_LOADED,
        payload: perfume
    }
}

export const perfumeLoader = () => async (dispatch) => {
    let data = await getPerfume();
    dispatch(perfumeLoaded(data));
}

const perfumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case PERFUME_LOADED:
            return {...state, perfume: action.payload, loading: false}
        default:
            return state;
    }
};

export default perfumeReducer;
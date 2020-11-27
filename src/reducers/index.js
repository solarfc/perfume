import {combineReducers} from "redux";
import perfumeReducer from "./perfume-reducer";
import cardReducer from "./card-reducers";


const reducer = combineReducers({
    perfumeReducer: perfumeReducer,
    cardReducer: cardReducer
});

export default reducer;
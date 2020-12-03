import {combineReducers} from "redux";
import perfumeReducer from "./perfume-reducer";
import cardReducer from "./card-reducers";
import cartReducer from "./cart-reducers";


const reducer = combineReducers({
    homePage: perfumeReducer,
    cardPage: cardReducer,
    cartPage: cartReducer
});

export default reducer;
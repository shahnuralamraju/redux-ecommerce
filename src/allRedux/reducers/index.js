import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { ProductReducer } from "./ProductReducer";


export const rootReducer = combineReducers({
    allProducts:ProductReducer,
    cart:CartReducer
})
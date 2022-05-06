import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { productReducer } from "./ProductReducer";


export const rootRducer = combineReducers({
    allProducts:productReducer,
    cart:CartReducer
})
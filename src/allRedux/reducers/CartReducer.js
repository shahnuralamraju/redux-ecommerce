import { toast } from "react-toastify";

let carts = [];
const getCartItem = () => {
    const isFound = localStorage.getItem("cart")
    if (isFound) {
        let getCarts = JSON.parse(isFound);
        carts = getCarts;
    }
};

getCartItem();
const initialState = {    
    cart: carts,
};

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const cartProduct = state.cart.find(product => product.id === Number(action.payload.id));
            if (cartProduct) {
                toast.error("product allready added in the cart", { theme: "dark", position: "top-center" })
                localStorage.setItem("cart", JSON.stringify([...state.cart]))
                return {
                    ...state
                }
            } else {
                localStorage.setItem("cart", JSON.stringify([...state.cart, action.payload]))
                return {
                    ...state, cart: [...state.cart, action.payload]
                }
            }

        case "REMOVE_TO_CART":
            const existingProduct = state.cart.filter(product => product.id !== Number(action.id));
            localStorage.setItem("cart", JSON.stringify(existingProduct))
            return {
                ...state, cart: existingProduct
            }

        case "INCREASE_QTY":
            const p = state.cart.find(product => product.id === Number(action.id));
            const pIndex = state.cart.findIndex(prd => prd.id === Number(action.id));
            if (p) {
                p.quantity += 1;
                state.cart[pIndex] = p;
            }
            else {
                toast.error("product not added yet! in the cart", { theme: "dark", position: "top-center" })
            }
            localStorage.setItem("cart", JSON.stringify([...state.cart]))
            return {
                ...state, cart: [...state.cart]
            }
            
        case "DECREASE_QTY":
            let dp = state.cart.find(product => product.id === Number(action.id));
            const dpIndex = state.cart.findIndex(prd => prd.id === Number(action.id));
            if (dp) {
                if (dp.quantity <= 1) {
                    toast.warn("You cann't decrease quantity less than 1", { theme: "dark" })
                    dp.quantity = 1;
                } else {
                    dp.quantity -= 1;
                }
                state.cart[dpIndex] = dp;
            }
            else {
                toast.error("product not added yet! in the cart", { theme: "dark", position: "top-center" })
            }
            localStorage.setItem("cart", JSON.stringify([...state.cart]))
            return {
                ...state, cart: [...state.cart]
            }

        default:
            return state;
    }
}
export const addToCart = (product) => {
    return{
        type:"ADD_TO_CART",
        payload:product,

    }
};
export const removeToCart = (id) => {
    return{
        type:"REMOVE_TO_CART",
        id
    }
};
export const increaseQty = (id) => {
    return{
        type:"INCREASE_QTY",
        id,
    }
};
export const decreaseQty = (id) => {
    return{
        type:"DECREASE_QTY",
        id
    }
};
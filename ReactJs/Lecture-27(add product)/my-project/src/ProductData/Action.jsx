import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./Constant";

export const addToCart = (data)=>{
    console.warn('addToCartAction Called', data);
    return{
        type:ADD_TO_CART
    }
}

export const RemoveToCart = (data)=>{
    console.warn('RemoveToCartAction Called', data);
    return{
        type:REMOVE_TO_CART
    }
}

export const emptyCart = (data)=>{
    console.warn('EmptyCartAction Called', data);
    return{
        type:EMPTY_CART_CART
    }
}
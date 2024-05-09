import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./Constant";

export const addToCart = (data)=>{
    console.warn('addToCartAction Called', data);
    return{
        type:ADD_TO_CART,
        data
    }
}

export const RemoveToCart = (data)=>{
    console.warn('RemoveToCartAction Called', data);
    return{
        type:REMOVE_TO_CART,
        data
    }
}

export const emptyCart = ()=>{
    console.warn('EmptyCartAction Called');
    return{
        type:EMPTY_CART
    }
}
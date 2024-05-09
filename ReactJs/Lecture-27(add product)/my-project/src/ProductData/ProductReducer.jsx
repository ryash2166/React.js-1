import { PRODUCT_ADD } from "./ProductConstant";

const ProductReducer = (data = [] , action) => {
    switch(action.type){
        case PRODUCT_ADD:
            console.warn('ProductReducer Called', action);
            return [action.data, ...data]
        default: return data
    }
}

export default ProductReducer
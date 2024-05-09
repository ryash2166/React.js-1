import { PRODUCT_LIST, PRODUCT_SET } from "../Redux/Constant";


const ProductReducer = (data = [] , action) => {
    switch(action.type){
        case PRODUCT_LIST:
            console.warn('ProductReducer Called', action);
            return [action.data]
        case PRODUCT_SET:
            console.warn('ProductReducer Called', action);
            return [action.data]
        default: return data
    }
}

export default ProductReducer
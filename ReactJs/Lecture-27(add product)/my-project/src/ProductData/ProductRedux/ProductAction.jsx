import { PRODUCT_LIST } from "../Redux/Constant";

export const ProductData =  (data) => {
    // let ProductList = await fetch('http://localhost:3000/Product')
    // data = await ProductList.json()
    return{
        type: PRODUCT_LIST,
        data: 'Great'
    }
}
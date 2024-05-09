import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_ADD, PRODUCT_SET } from "./ProductConstant";



function* getProduct(){
    let ProductList = yield fetch('http://localhost:3000/Product')
    data = yield ProductList.json()
    console.warn(data);
    yield put({
        type: PRODUCT_SET , data
    })
    console.warn('ProductSaga Called', data);
}

function* ProductSaga(){
    yield takeEvery(PRODUCT_ADD, getProduct)
}

export default ProductSaga
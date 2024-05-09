import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import createSagaMiddleware from 'redux-saga'
import ProductSaga from "./ProductRedux/ProductSaga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: RootReducer,
    middleware: () => [sagaMiddleware]
})

 sagaMiddleware.run(ProductSaga)

 export default store
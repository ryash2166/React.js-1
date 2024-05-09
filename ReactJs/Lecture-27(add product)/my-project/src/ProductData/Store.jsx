import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import createSagaMiddleware from 'redux-saga'
import ProductSaga from "./ProductSaga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: RootReducer,
    middleware: () => [sagaMiddleware]
})

 middleware.run(ProductSaga)

 export default store
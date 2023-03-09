import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { fetchReducer } from "./reducers/fetchReducer";
import fetchSaga from './saga/fetchSaga';

const sagaMiddleware = createSagaMiddleware()


const store = configureStore({
    reducer:{
        fetchReducer
    },
    middleware:()=>[sagaMiddleware]
})

sagaMiddleware.run(fetchSaga)

export default store
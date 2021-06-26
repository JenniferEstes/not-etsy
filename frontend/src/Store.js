import { configureStore } from '@reduxjs/toolkit'
import businessReducer from "./reducers/businessReducer";

const store = configureStore({
    reducer: {
        business: businessReducer
    },
})

export default store

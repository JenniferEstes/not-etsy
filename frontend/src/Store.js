import { configureStore } from '@reduxjs/toolkit'
import businessReducer from "./reducers/businessReducer";
import categoryReducer from "./reducers/categoryReducer";

const store = configureStore({
    reducer: {
        business: businessReducer,
        category: categoryReducer,
    },
})

export default store

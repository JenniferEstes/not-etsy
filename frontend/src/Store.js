import { configureStore } from '@reduxjs/toolkit'
import businessReducer from "./reducers/businessReducer";
import categoryReducer from "./reducers/categoryReducer";
import favoriteReducer from "./reducers/favoriteReducer";

const store = configureStore({
    reducer: {
        business: businessReducer,
        category: categoryReducer,
        favorite: favoriteReducer,
    },
})

export default store

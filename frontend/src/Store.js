import { configureStore } from '@reduxjs/toolkit'
import businessReducer from "./reducers/businessReducer";
import categoryReducer from "./reducers/categoryReducer";
import favoriteReducer from "./reducers/favoriteReducer";
import productReducer from "./reducers/productReducer";
import rootReducer from "./reducers/rootReducer";

const store = configureStore({
    reducer: {
        business: businessReducer,
        category: categoryReducer,
        favorite: favoriteReducer,
        product: productReducer,
        root: rootReducer
    },
})

export default store

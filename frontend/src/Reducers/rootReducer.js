import { combineReducers } from 'redux'
import businessReducer from './businessReducer'
import categoryReducer from './categoryReducer'
import favoriteReducer from './favoriteReducer'
import productReducer from './productReducer'

const rootReducer = combineReducers({
    businesses: businessReducer,
    categories: categoryReducer,
    favorites: favoriteReducer,
    products: productReducer
})

export default rootReducer
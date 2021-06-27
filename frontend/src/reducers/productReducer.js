const initialState = []

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'TOGGLE_FAVORITE':
            return {
                ...state,
                products: state.products.map((product) => {
                    // If the id is for the changed product, return the updated one.
                    if (product.id === action.payload.id) {
                        return action.payload
                    } else {
                        // Otherwise return the existing one.
                        return product
                    }
                })
            }
        default:
            return state
    }
}
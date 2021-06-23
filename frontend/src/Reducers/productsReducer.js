const initialState = []

export default function productsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                posts: action.payload


                return action.payload
        default:
            return state
    }
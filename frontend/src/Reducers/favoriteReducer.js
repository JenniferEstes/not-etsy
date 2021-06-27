// reducers must be pure and not mutate original state
const initialState = []

export default function favoriteReducer(state = initialState, action){
    switch(action.type){
        case 'FETCH_FAVORITES':
            return {
                ...state,
                favorites: action.payload
            }
        default:
            return state
    }
}
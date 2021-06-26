const initialState = []

export default function favoriteReducer(state = initialState, action){
    switch(action.type){
        case 'FETCH_FAVORITE':
            return {
                ...state,
                favorites: action.payload
            }
        default:
            return state
    }
}
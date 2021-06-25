const initialState = []

export default function categoryReducer(state = initialState, action){
    switch(action.type){
        case 'FETCH_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}
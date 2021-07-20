// reducers must be pure (predictable) and not mutate original state

const initialState = []

export default function favoriteReducer(state = initialState, action){
    switch(action.type){
        case 'FETCH_FAVORITES':
            // return new state obj based on action type, copying over existing state, so prev data isn't lost
            return {
                ...state,
                favorites: action.payload
            }
        default:
            return state
    }
}
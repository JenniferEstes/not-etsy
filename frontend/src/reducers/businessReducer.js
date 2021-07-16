const initialState = []

export default function businessReducer(state = initialState, action){
    switch(action.type){
        case 'FETCH_BUSINESSES':
            return {
                ...state,
                businesses: action.payload
            }
        default:
            return state
    }
}


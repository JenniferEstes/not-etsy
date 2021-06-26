export const fetchfavorites = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/favorites')
            .then(resp => resp.json())
            .then(favorites => dispatch({ type: 'FETCH_FAVORITES', payload: favorites }))
    }
}
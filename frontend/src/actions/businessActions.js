export const fetchBusinesses = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/businesses')
            .then(resp => resp.json())
            .then(businesses => dispatch({ type: 'FETCH_PRODUCTS', payload: businesses }))
    }
}
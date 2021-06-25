export const fetchCategories = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/categories')
            .then(resp => resp.json())
            .then(categories => dispatch({ type: 'FETCH_CATEGORIES', payload: categories }))
    }
}
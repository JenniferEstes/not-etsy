export const fetchProducts = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/products')
            .then(resp => resp.json())
            .then(products => dispatch({ type: 'FETCH_PRODUCTS', payload: products }))
    }
}


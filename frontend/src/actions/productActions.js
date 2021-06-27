export const fetchProducts = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/products')
            .then(resp => resp.json())
            .then(products => dispatch({ type: 'FETCH_PRODUCTS', payload: products }))
    }
}

export const toggleFavorite = (product) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/products/${product.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...product, favorite: !product.favorite })
        })
            .then(resp => resp.json())
            .then(prod => dispatch({ type: 'TOGGLE_FAVORITE', payload: prod }))
    }
}
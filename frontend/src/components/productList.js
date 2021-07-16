import React, { useEffect, useState } from 'react'
// UseSelector store the return values instead of passing down as props
// useDispatch dispatches an action to store by adding an action as arg
import { useDispatch, useSelector} from 'react-redux'
import { fetchProducts, toggleFavorite } from '../actions/productActions'
import Product from './Product'

export default function ProductList() {
    // #first arg is state from store; current state
    // #first products is from rootReducer
    // second products is from productActions
    const productList = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    const [value, setValue] = useState( 0)


    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const favoriteHandler = (product) => () => dispatch(toggleFavorite(product))

    return productList != null ? (
        <>
            <div>
                {value}
            </div>
            {productList.map((p) =>
                <Product
                    product={p}
                    onClickFavorite={favoriteHandler}
                    key={p.id}
                    handleValue={setValue}
                />
            )}
        </>
    ) : (<div></div>)
}
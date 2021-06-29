import React, { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux";
import { fetchProducts, toggleFavorite } from "../actions/productActions";
import Product from "./Product";

export default function ProductList() {
    // #first arg is state from store
    // #first products is from rootReducer
    // second products is from productActions
    const productList = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const favoriteHandler = (product) => () => dispatch(toggleFavorite(product))

    return productList != null ? (
        <div>
            {productList.map((p) =>
                <Product product={p} onClickFavorite={favoriteHandler} key={p.id} />
            )}
        </div>
    ) : (<div></div>)
}
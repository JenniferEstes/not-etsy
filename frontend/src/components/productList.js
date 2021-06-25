import React, { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux";
import { fetchProducts } from "../actions/productActions";

export default function ProductList() {
    const productList = useSelector( state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div>
            <ul>
                {productList.map(p =>
                    <li>(p.name)</li>,
                    <li>(p.price)</li>
                )}
            </ul>
        </div>
    )
}

export default productList
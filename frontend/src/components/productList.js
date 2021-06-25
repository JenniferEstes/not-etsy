import React, { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux";
import { fetchProducts } from "../actions/productActions";

export default function ProductList() {
    const productList = useSelector( state => state.products)
    const dispatch = useDispatch()

function productList() {
    return (
        <div>
            productList
        </div>
    )
}

export default productList
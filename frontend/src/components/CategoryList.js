import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fetchCategories } from '../actions/categoryAction'

export default function CategoryList() {
    // #first arg is state from store
    // #first products is from rootReducer
    // second products is from productActions
    const categoryList = useSelector( state => state.categories.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
        <div>
            <h1>All products</h1>
            <ul>
                {categoryList.map((c, idx) => <li key={idx}>(c.name)</li>)}
            </ul>
        </div>
    )
}
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
    }, [dispatch])

    return categoryList != null ? (
        <div>
            {categoryList.map((c, inx) =>
                <ul>
                    <li key={inx}>{c.name}</li>
                </ul>
                // Put back button here
            )}
        </div>
    ) : (<div></div>)
}

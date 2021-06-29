import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fetchCategories } from '../actions/categoryAction'
import Card from 'react-bootstrap/Card'

export default function CategoryList() {
    // #first arg is state from store
    // #first categories is from rootReducer
    // second categories is from categoryActions
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
            )}
        </div>
    ) : (<div></div>)
}

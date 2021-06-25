import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fetchCategories } from '../actions/categoryAction'

export default function CategoryList() {
    const categoryList = useSelector( state => state.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
        <div>
            <ul>
                {categoryList.map(c => <li>(c.name)</li>)}
            </ul>
        </div>
    )
}
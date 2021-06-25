import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fetchCategiries } from '../actions/categoryActions'

export default function CategoryList() {
    const categoryList = useSelector( state => state.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategiries())
    }, [])

    return (
        <div>
            <ul>
                {categoryList.map(c => <li>(c.name)</li>)}
            </ul>
        </div>
    )
}
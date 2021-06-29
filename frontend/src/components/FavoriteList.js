import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fetchFavorites } from '../actions/favoriteActions'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

export default function FavoriteList() {
    // #first arg is state from store
    // #first favorites is from rootReducer
    // second favorites is from favoriteActions
    const favoriteList = useSelector( state => state.favorites.favorites)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFavorites())
    }, [dispatch])

    return favoriteList != null ? (
        <>
            {favoriteList.map((product) =>
                <ul>
                    <li key={product.id}>{product.name}, {product.business.name}</li>
                </ul>
            )}
        </div>
    ) : (<div></div>)
}


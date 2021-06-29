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
                <Card style={{ width: '18rem' }}>
                    <div className="favorite-container">
                        <Card.Img key={product.id} src={product.image} alt=""/>
                    </div>
                    <Card.Body>
                        <Row>
                            <Card.Title>{product.name}</Card.Title>
                        </Row>
                        <Row><Card.Subtitle className="mb-2 text-muted">{product.business.name}</Card.Subtitle>
                        </Row>
                        <Row>
                            <Card.Text>${product.price}</Card.Text>
                        </Row>
                    </Card.Body>
                </Card>
            )}
        </>
    ) : (<div></div>)
}


import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons'
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

export default function Product(props) {
    const { product, onClickFavorite, handleValue} = props

    const favorite = (product) => {
        return product.favorite
            ? <FontAwesomeIcon
                icon={fasHeart}
                onClick={onClickFavorite(product)}
            />
            : <FontAwesomeIcon
                icon={farHeart}
                onClick={onClickFavorite(product)}
            />
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <div className="product-container">
                    <Card.Img
                        key={product.id}
                        src={product.image}
                        alt=""/>
                </div>
                <Card.Body>
                    <Row><Card.Title>{product.name}</Card.Title></Row>
                    <Row><Card.Subtitle className="mb-2 text-muted">{product.business.name}</Card.Subtitle></Row>
                    <Row><Card.Text>${product.price}</Card.Text></Row>
                    <row><button onClick={() => handleValue(preValue => preValue + 1)}>+</button></row>
                </Card.Body>
                {favorite(product)}
            </Card>
            <br/>
        </>
    )
}
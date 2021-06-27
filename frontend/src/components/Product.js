import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as fasHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as farHeart} from "@fortawesome/free-regular-svg-icons";

export default function Product(props) {
    const { product, onClickFavorite } = props

    const favorite = (product) => {
        return product.favorite
            ? <FontAwesomeIcon icon={fasHeart} onClick={onClickFavorite(product)} />
            : <FontAwesomeIcon icon={farHeart} onClick={onClickFavorite(product)} />
    }

    return (
        <ul>
            <li>{product.name}</li>
            <li>{product.business.name}</li>
            <li>{product.price}</li>
            <li>
                {favorite(product)}
            </li>
        </ul>
    )
}
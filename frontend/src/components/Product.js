import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { fetchProducts } from '../actions/productActions'
// import ProductList from "./ProductList";

class Product extends Component {
    render() {
        const {name, price, business_name} = this.props.product
        return (
            <ul id="product">
                <li>{name}</li>
                <li>{price}</li>
                <li>{business_name}</li>
            </ul>
        )
    }
}

export default Product
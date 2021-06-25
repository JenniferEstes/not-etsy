import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import ReactImageAppear from 'react-image-appear'

import '../Home.css'

    // const [home, setHome] = useState("products")

    // function renderHome() {
    //     switch (home) {
    //         case "products":
    //             return <ProductList />
    //         case "categories":
    //             return <CategoryList />
    //         case "Businesses":
    //             return <BusinessList />
    //         case "favorites":
    //             return <FavoriteList />
    //         default:
    //             return <Home />
    //     }
    // }

    return (
        <div>
            <button><NavLink to="/products">Products</NavLink></button>
            <button><NavLink to="/categories">Categories</NavLink></button>
            <button><NavLink to="/businesses">Businesses</NavLink></button>
        </div>
    )
}


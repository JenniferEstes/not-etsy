import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {

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


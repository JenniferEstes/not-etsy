import React from 'react'
// switch allows navigation between routes; finds exact route and first route that matches
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import BusinessList from './BusinessList'
import CategoryList from './CategoryList'
import FavoriteList from './FavoriteList'
import ProductList from './ProductList'
import About from './About'

export const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/businesses' component={BusinessList} />
            <Route path='/categories' component={CategoryList} />
            <Route path='/favorites' component={FavoriteList} />
            <Route path='/products' component={ProductList} />
            <Route exact path='/about' component={About} />

        </Switch>
    )
}

// stateless component
import React from 'react'
// switch looks through children routes and renders the first one that matches the current URL; allowing only 1 to render at a time
// if no route matches, switch renders null
// route renders UI when path matches current URL
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
            <Route path='/about' component={About} />
        </Switch>
    )
}
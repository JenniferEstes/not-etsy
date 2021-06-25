import React from 'react'
import './App.css'
import { Router } from './components/Router'
import ProductList from './components/ProductList'
import BusinessList from './components/BusinessList'
import CategoryList from './components/CategoryList'

function App() {
  return (
      <div>
          <ProductList />
          <BusinessList />
          <CategoryList />
          <Router />
      </div>
  )
}

export default App;
// stateless component
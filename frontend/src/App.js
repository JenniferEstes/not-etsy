import React from 'react'
import './App.css'
import Navbar from './components/NavBar'
import { Router } from './components/Router'

function App() {
  return (
      <div>
          <Navbar />
          <Router />
      </div>
  )
}

export default App;
// stateless component
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function navBar() {

    return (
        <div id='nav-bar' className='navbar'>
            <Link to='/products'>
                <h5 id='game'>Products</h5>
            </Link>
            <Link to='/favorites'>
                <h5 id='game'>Favorites</h5>
            </Link>
        </div>
    )
}

export default navBar
import React from 'react'
import { Link } from 'react-router-dom'

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
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function navBar() {

    return (
        <Navbar bg="light" expand="md" className="mb-4 shadow-sm">
            <Navbar.Brand>Not Etsy</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>

                    <Nav.Link href="/products">Products</Nav.Link>
                    <Nav.Link href="/businesses">Businesses</Nav.Link>
                    <Nav.Link href="/categories">Categories</Nav.Link>
                    <Nav.Link href="/favorites">Favorites</Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default navBar
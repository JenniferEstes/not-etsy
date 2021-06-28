import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function fixedBottom() {

    return (
        <>
        <Navbar bg="light" expand="md" className="mb-7 shadow-sm" fixed="bottom">
            <Navbar.Brand>Not Etsy</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        </Navbar>
        </>
    )
}

export default fixedBottom

// stateless component
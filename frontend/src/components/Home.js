import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import ReactImageAppear from 'react-image-appear'

import '../Home.css'

export class Home extends Component {

    render() {
        return (
            <Container className="mb-5">
                <Row className="">
                    <Col sm={6}>
                        <Link to="/products">
                            <Card className="text-white bg-dark my-2 w-100">
                                <ReactImageAppear
                                    src="https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                                    className="card-img"
                                    animation="blurIn"
                                    easing="ease-out"
                                />
                                <Card.ImgOverlay className="image-overlay-custom">
                                    <Card.Title as="h1" className="text-center overlay-title-custom">Browse
                                        Products</Card.Title>
                                    <Link to="/products" className="stretched-link"></Link>
                                </Card.ImgOverlay>
                            </Card>
                        </Link>
                    </Col>
                    <Col sm={6}>
                        <Card className="text-white bg-dark my-2">
                            <ReactImageAppear
                                src="https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                                className="card-img"
                                animation="blurIn"
                                easing="ease-out"
                            />
                            <Card.ImgOverlay className="image-overlay-custom">
                                <Card.Title as="h1" className="text-center overlay-title-custom">Browse
                                    Businesses</Card.Title>
                                <Link to="/businesses" className="stretched-link"></Link>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{span: 6, offset: 3}}>
                        <Card className="text-white bg-dark my-2">
                            <ReactImageAppear
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=80"
                                className="card-img"
                                animation="blurIn"
                                easing="ease-out"
                            />
                            <Card.ImgOverlay className="image-overlay-custom">
                                <Card.Title as="h1" className="text-center">Browse
                                    Categories</Card.Title>
                                <Link to="/categories" className="stretched-link"></Link>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home
// import React from 'react'
// export default function Home() {
//
//     return (
//         <div>
//             <button><NavLink to="/products">Products</NavLink></button>
//             <button><NavLink to="/categories">Categories</NavLink></button>
//             <button><NavLink to="/businesses">Businesses</NavLink></button>
//         </div>
//     )
// }


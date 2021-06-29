import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import ReactImageAppear from 'react-image-appear'
import '../Home.css'

export default function Home() {
        return (
            <>
            <Container className="mb-5">
                <Row className="">
                    <Col sm={6}>
                        <Link to="/products">
                            <Card className="text-white bg-dark my-2 w-100">
                                <ReactImageAppear
                                    src="https://images.unsplash.com/photo-1467293622093-9f15c96be70f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhpZ2glMjBlbmQlMjB2aW50YWdlJTIwY2F0ZWdvcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                                    className="card-img"
                                    animation="blurIn"
                                    easing="ease-out"
                                />
                                <Card.ImgOverlay className="image-overlay-custom">
                                    <Card.Title as="h1" className="text-center overlay-title-custom">Browse Products</Card.Title>
                                    <Link to="/products" className="stretched-link"></Link>
                                </Card.ImgOverlay>
                            </Card>
                        </Link>
                    </Col>
                    <Col sm={6}>
                        <Card className="text-white bg-dark my-2">
                            <ReactImageAppear
                                src="https://images.unsplash.com/photo-1542208998-f6dbbb27a72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"
                                className="card-img"
                                animation="blurIn"
                                easing="ease-out"
                            />
                            <Card.ImgOverlay className="image-overlay-custom">
                                <Card.Title as="h1" className="text-center overlay-title-custom">Browse Businesses</Card.Title>
                                <Link to="/businesses" className="stretched-link"></Link>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{span: 6, offset: 3}}>
                        <Card className="text-white bg-dark my-2">
                            <ReactImageAppear
                                src="https://images.unsplash.com/photo-1503926359680-9ddd5b2bcbdc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxpbnRlcmlvciUyMHdhbGxhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                                className="card-img"
                                animation="blurIn"
                                easing="ease-out"
                            />
                            <Card.ImgOverlay className="image-overlay-custom">
                                <Card.Title as="h1" className="text-center">Browse Categories</Card.Title>
                                <Link to="/categories" className="stretched-link"></Link>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </>
        )
}

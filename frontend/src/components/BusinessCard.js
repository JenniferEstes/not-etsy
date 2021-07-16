import React from 'react'
import Card from 'react-bootstrap/Card'


function BusinessCard(props) {

    const name = props.business.name

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                {name}
            </Card.Body>
        </Card>
    )
}

export default BusinessCard
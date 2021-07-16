import React from 'react'
import Card from 'react-bootstrap/Card'

function About() {

    return (
        <>
            <Card className="category-container">
                <Card.Body>
                    <Card.Title>About Not Etsy</Card.Title>
                    <Card.Text>
                        Supporting small businesses is a passion of mine. When I have free time, I enjoy browsing through the popular e-commerce site, Etsy, where mostly small businesses sell handmade or vintage items. One main part of this process is favoriting items I may want to purchase at a later date.
                        Not Etsy is a single page application (SPA) that uses seed data to show how a customer can browse products, businesses, categories, and their favorite products on site like Etsy.
                        Fun Fact: The seed data came directly from my favorite items on Etsy right now.
                        You can find the link to the favorites page on the same navigation bar you used to reach this page.
                        Feel free to favorite and un-favorite as much as you'd like!
                        I hope this application inspires you to support more small businesses, whether it be in your local community or online.
                        <br/><br/>
                        Best Wishes,<br/>
                        Jennifer Estes
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default About


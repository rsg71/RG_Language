import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="mb-3">
                        <h1>About Us</h1>
                        <p className="lead text-muted">Wow. We didn't think anyone would get this far...</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p>The story of why we created this site would take too long to explain. In the meantime, you might as well check out one of our favorite documentaries ever made:</p>
                       
                        <iframe width="100%" height="450" src="https://www.youtube.com/embed/w-TJxI-WUMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="rounded"></iframe>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

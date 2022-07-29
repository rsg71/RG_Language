import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./NoMatch.css"

export default function NoMatch() {
    return (
        <>
             <Container id="NoMatchContainer">
                <Row id="NoMatchRow">
                    <Col >
                        <h1>Error 404 Page Not Found</h1>
                        <h1>
                            <span role="img" aria-label="Face With Rolling Eyes Emoji">
                                🙄
                            </span>

                        </h1>
                        <br/>
                        <Link to="/"  id="NoMatchReturnHome">  Return Home</Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

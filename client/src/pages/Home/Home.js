import React from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap"
import { Link } from "react-router-dom"

function Home() {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Hello and welcome to RG Language</h1>
                        <h2>I want to learn vocabulary for:</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardDeck>
                                <Card bg="warning">
                            <Link to="/spanish">

                                    <Card.Body>
                                        <Card.Title>Spanish</Card.Title>
                                        <Card.Text>
                                           Get started with Spanish
                                    </Card.Text>
                                    </Card.Body>
                                    </Link>

                                </Card>
                            <Card bg="primary">

                                <Card.Body>
                                    <Card.Title>French</Card.Title>
                                    <Card.Text>
                                       Get started with French{' '}
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                            <Card>

                                <Card.Body>
                                    <Card.Title>German</Card.Title>
                                    <Card.Text>
                                       Get started with German
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </CardDeck>


                    </Col>
                </Row>

                <Row>
                    <Col>
                        <CardDeck>
                            <Card bg="danger">

                                <Card.Body>
                                    <Card.Title>Italian</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. 
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                            <Card bg="success">

                                <Card.Body>
                                    <Card.Title>Portuguese</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. 
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                            <Card>

                                <Card.Body>
                                    <Card.Title>Portuguese</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. 
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </CardDeck>
                    </Col>
                </Row>

            </Container>



        </>
    )
}

export default Home;
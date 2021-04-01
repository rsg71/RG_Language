import React from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap"
import { Link } from "react-router-dom"
import LanguagesJson from "../../data/languages.json"
import "./Home.css"

function Home() {

    return (
        <>
            <Container>
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                <Row>
                    <Col>
                        <h1>Hello and welcome to RG Language</h1>
                        <h2>I want to learn vocabulary for:</h2>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>

                            <CardDeck id="homeLanguagesCardDeck">
                            <Card className="languageCard">
                                    <Link to="/secret">
                                        <Card.Body className="text-center" id="secretLanguageCardBody" >
                                            Secret Language
                                        <i className="bi bi-patch-question" id="questionmark"></i>
                                        </Card.Body>
                                    </Link>
                                </Card>
                                {LanguagesJson.map(language => (
                                    <Col>



                                        <Card key={language.id} bg={language.bg} className="languageCard">
                                            <Link to={language.languageHomePage}
                                                style={{ color: language.fontColor }}>

                                                <Card.Body>
                                                    <Card.Title >{language.language}</Card.Title>
                                                    <Card.Text>
                                                        {/* Get started with {language.language} */}
                                                        <img src={language.source} alt={language.language} />
                                                        {language.totalWords} words
                                            </Card.Text>

                                                </Card.Body>
                                            </Link>
                                        </Card>
                                    </Col>

                                ))}
                               

                            </CardDeck>
                        </Row>

                    </Col>
                </Row>
            </Container>



        </>
    )
}

export default Home;
import React from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap"
import { Link } from "react-router-dom"
import LanguagesJson from "../../data/languages.json"
import "./Home.css"

function Home() {

    return (
        <>
            <Container >
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

                                {LanguagesJson.map(language => (
                                    <Col sm={6} md={6} lg={3} key={language.id}>
                                        <Card key={language.id} bg={language.bg} className="languageCard my-4 ">
                                            <Link to={language.languageHomePage}
                                                style={{ color: language.fontColor }}>
                                                <Card.Body>
                                                    <Card.Title >{language.language}</Card.Title>
                                                    <Card.Text>
                                                        {
                                                            language.language === "Secret Language" ?
                                                                <img style={{height:"4em", color:"#007BFF"}} src={language.source} alt={language.language} />
                                                                :
                                                                <img className="flagImage" src={language.source} alt={language.language} />

                                                        }
                                                        <div>{language.totalWords} words</div>
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
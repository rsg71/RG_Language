import React from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import LanguagesJson from "../../data/languages.json"
import { cardClass1, cardClass2 } from "../../styles/style";
import "./Home.css"

function Home() {

    let navigate = useNavigate();

    

    

    return (
        <>
            <Container >

                <Row>
                    <Col>
                        <h1>Hello and welcome to RG Language</h1>
                        <p className="lead text-muted">I want to learn vocabulary for:</p>
                    </Col>
                </Row>


                <Row className="mt-0 animate__animated animate__fadeIn">

                    <CardDeck id="homeLanguagesCardDeck">

                        {LanguagesJson.map(language => (
                            <Col sm={6} md={6} lg={3} key={language.id}>
                                <Card key={language.id} bg={language.bg}
                                    onClick={() => navigate(`${language.languageHomePage}`)}
                                    className={language.language === "German" || language.language === "Secret" ? cardClass1 : cardClass2}
                                >

                                    <Card.Body className={language.isActive ? "notDisabledCard" : "disabledCard"}>
                                        <Card.Title> <span className="nowrap">{language.language}</span></Card.Title>
                                        <Card.Text className="mb-1">
                                            {language.language === "Secret" ?
                                                <img style={{ height: "4em", color: "#007BFF" }} src={language.source} alt={language.language} />
                                                :
                                                <img className="flagImage" src={language.source} alt={language.language} />
                                            }
                                        </Card.Text>
                                        <div>{language.totalWords} words</div>

                                    </Card.Body>

                                </Card>
                            </Col>
                        ))}

                    </CardDeck>



                    <div className="text-muted text-center ml-3" style={{ fontSize: "0.8rem" }}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </Row>
            </Container>



        </>
    )
}

export default Home;
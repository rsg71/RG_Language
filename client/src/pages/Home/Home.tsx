import React from "react";
import { Container, Row, Col, CardDeck } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import LanguageCard from "../../components/LanguageCard/LanguageCard";
import LanguagesJson from "../../data/languages.json"
import "./Home.css"

function Home() {

    let navigate = useNavigate();





    return (
        <>
            <Container >

                <Row className="text-center">
                    <Col>
                    <Row>
                        
                    </Row>
                        <h1>Hello and welcome to RG Language</h1>
                        <p className="lead text-muted">I want to learn vocabulary for:</p>

                        <button className="btn btn-primary" onClick={() => navigate("/login")}>Log in</button>

                    </Col>

                    <Row className="mt-0 animate__animated animate__fadeIn mt-3" style={{ margin: "auto" }}>

                        <CardDeck id="homeLanguagesCardDeck">
                            <>
                                {LanguagesJson.map((language: any) => (
                                    <Col sm={6} md={6} lg={3} key={language.language}>
                                        <LanguageCard
                                            language={language}
                                        />
                                    </Col>
                                ))}
                            </>
                        </CardDeck>

                        {/* <div className="text-muted text-center ml-3" style={{ fontSize: "0.8rem" }}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                    </Row>


                    
                </Row>

            </Container>



        </>
    )
}

export default Home;
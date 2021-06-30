import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import GoToButton from '../../../components/GoToButton/GoToButton';

export default function SecretLanguage() {


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Secret Language Home</h1>
                        <p className="lead text-muted">Congrats! You've found the secret language, so welcome to the secret language homepage. Browse a couple options below for learning and interacting with this language.</p>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <h5>Continue learning</h5>
                        <Link to={"/secret-quiz"}>Practice vocab <i className="bi bi-arrow-right"></i></Link>
                    </Col>

                    <Col>
                        <h5>Secret language word bank</h5>
                        <Link to={"/all-secret-language-words"}>See words <i className="bi bi-arrow-right"></i></Link>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col>
                        <h5>Secret Language Translator</h5>
                        <Link to="/secret-translator">Translate text now <i className="bi bi-arrow-right"></i></Link>
                    </Col>
                </Row>

            </Container>

        </>
    )
}

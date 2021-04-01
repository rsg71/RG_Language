import React, {useState} from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Progress from '../../components/Progress/Progress';

export default function SecretLanguage() {
    const [secretLanguage, setSecretLanguage] = useState();

    

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Secret Language Home</h1>
                    </Col>
                </Row>


                <Row>
                    <Col>
                    <h5>Continue learning:</h5>
                        <Link to="/secret-quiz"><Button variant="primary">Practice vocab</Button></Link>
                    </Col>
                    <Col>
                    <h5>Secret language word bank:</h5>
                        <Link to="/all-secret-language-words"><Button variant="primary">See words</Button></Link>
                    </Col>
                </Row>

            </Container>

        </>
    )
}

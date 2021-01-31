import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {Link} from "react-router-dom"
import Progress from '../../components/Progress/Progress'

export default function Spanish() {
    return (
        <>
            <Container>

                <Row>
                    <Col>
                        <h1>Spanish home</h1>
                        <Progress />
                    </Col>
                </Row>


                <Row>
                    <Col>
                        Continue learning:

                        <Link to="/quiz"><Button variant="primary">Practice vocab</Button></Link>
                    </Col>
                </Row>

            </Container>

        </>
    )
}

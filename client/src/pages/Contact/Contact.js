import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from '../../components/ContactForm/ContactForm'

export default function Contact() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="mb-3">
                        <h1>Contact Us</h1>
                        <p className="lead text-muted">Fill out the form below and click submit. We'll get back to you shortly.</p>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <ContactForm />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

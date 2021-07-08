import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from '../../components/ContactForm/ContactForm'

export default function Contact() {



    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }


    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const submitForm = () => {
        setSubmitting(true)
    }


    useEffect(() => {
        if (submitting) {
            simulateNetworkRequest().then(() => {
                setSubmitting(false);
                setSubmitted(true);
            });
        }
    }, [submitting]);




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
                        {submitted ?
                            <h3 className="text-success animate__animated animate__fadeIn">Message submitted <i className="bi bi-check-circle-fill" /></h3>
                            :
                            <ContactForm submitting={submitting} submitForm={submitForm} />
                        }
                    </Col>
                </Row>

            </Container>
        </>
    )
}

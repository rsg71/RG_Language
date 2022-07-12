import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap'
// import ContactForm from '../../components/ContactForm/ContactForm';
import Error from '../../components/Error/Error';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const form = useRef();

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
    const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY;


    // console.log('keys are: ', serviceId + '\n' + templateId + '\n' + publicKey + '\n');

    const sendEmail = (e) => {
        setSubmitting(true);

        e.preventDefault();
        console.log('form.current: ', form.current);

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setSubmitting(false);
                setSubmitted(true);
                setError(false);
            }, (error) => {
                console.log(error.text);
                setSubmitting(false);
                setSubmitted(true);
                setError(true);
            });
    };





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
                        {/* <button onClick={sendEmail}>sendEmail</button> */}
                        <p className="lead text-muted">Fill out the form below and click submit. We'll get back to you shortly.</p>

                    </Col>
                </Row>


                <Row>
                    <Col>
                        {error && <Error />}
                        {submitted ?
                            <h3 className="text-success animate__animated animate__fadeIn">Message submitted <i className="bi bi-check-circle-fill" /></h3>
                            :
                            <>
                                {/* <ContactForm submitting={submitting} submitForm={submitForm} /> */}
                                <form ref={form} onSubmit={sendEmail}>
                                    <Row className="mb-3">
                                        <Col>
                                            <label>Name</label>
                                            <input className="form-control" type="text" disabled={submitting} name="from_name" />
                                        </Col>
                                        <Col>
                                            <label>Email</label>
                                            <input className="form-control" type="email" disabled={submitting} name="from_name" placeholder="Enter email" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <label>Message</label>
                                            <textarea className="form-control" name="message" disabled={submitting} rows={4} />
                                            {submitting ?
                                                <>
                                                    <Spinner
                                                        as="span"
                                                        animation="border"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                    />
                                                    <span className="ml-2 mb-2">Submitting...</span>
                                                </>
                                                :
                                                <input type="submit" value="Submit" className="btn btn-primary mt-3" disabled={submitting} />
                                            }
                                        </Col>
                                    </Row>

                                </form>
                            </>
                        }
                    </Col>
                </Row>

            </Container>
        </>
    )
}

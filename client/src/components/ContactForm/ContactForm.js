import React from 'react'
import { Form, Row, Col, Button, Spinner } from 'react-bootstrap'

export default function ContactForm({ submitting, submitForm }) {
    return (
        <>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="" controlId="formBasicPassword">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" disabled={submitting} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="" controlId="formBasicPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" disabled={submitting} />
                        </Form.Group>
                    </Col>
                </Row>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" disabled={submitting} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>



                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} disabled={submitting} />
                </Form.Group>
                <Button variant="primary" onClick={submitForm} disabled={submitting}>

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
                        : <span>Submit</span>
                    }
                </Button>

            </Form>
        </>
    )
}

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {

        return (
        <>
            <Container>

                <Row>
                    <Col>
                        <h1>About</h1>

                        <p>
                            I've always thought that vocabulary acquisition is the most challenging and time consuming process in learning a new language. I created this site to shortcut this process and make it into a game. In the future I would like to add the following features to this site:
                        </p>

                        <ul>
                            <li>Full vocabulary lists (thousands of words per language)</li>
                            <li>Selections based on desired vocabulary level</li>
                            <li>Initial vocabulary tests to determine a learner's appropriate starting point</li>
                            <li>Regional selections to account for different vocabulary across different areas of the world</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

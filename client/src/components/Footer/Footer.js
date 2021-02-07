import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import "./Footer.css";

export default function Footer() {
    return (
        <div>
            <Container fluid className="footer">
                <hr/>
                <Row id="footerRow">
                    <Col className="footerColumn" sm={4}>
                        <h6>About</h6>
                        <ul>
                            <li>How it works</li>
                            <li>Languages offered</li>
                            <li>Privacy</li>
                        </ul>
                    </Col>
                    <Col className="footerColumn" sm={4}>
                        <h6>Follow</h6>
                        <ul>
                            <li>Twitter</li>
                            <li>Github</li>
                        </ul>
                    </Col>
                    <Col className="footerColumn" sm={4}>
                        <h6>Contact</h6>
                        <ul>
                            <li>rglanguage@gmail.com</li>
                            <li>215-913-7231</li>
                        </ul>
                    </Col>
                </Row>
                <Row id="footerBottomRow">
                    <Col>
                    <p>Copyright &copy; 2021 RG Language &bull; Privacy &bull; Terms</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

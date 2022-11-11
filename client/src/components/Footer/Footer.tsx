import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

import "./Footer.css";

export default function Footer() {

    const footerColClass = "footerColumn text-left"
    return (
        <div>
            <Container fluid className="footer">
                <hr/>
                <Row id="footerRow">
                    <Col className={footerColClass} sm={4}>
                        <h5>About</h5>
                        <ul>
                            <li>How it works</li>
                            <li><Link to="/languages-offered">Languages offered</Link></li>
                        </ul>
                    </Col>
                    <Col className={footerColClass} sm={4}>
                        <h5>Follow</h5>
                        <ul>
                            <li>Twitter</li>
                            <li>Github</li>
                        </ul>
                    </Col>
                    <Col className={footerColClass} sm={4}>
                        <h5>Contact</h5>
                        <ul>
                            <li><a href="mailto:robert.greenawalt@protonmail.com">Email</a></li>
                            <li>215-913-7231</li>
                        </ul>
                    </Col>
                </Row>
                <Row id="footerBottomRow">
                    <Col>
                    <p>Copyright &copy; 2022 RG Language &bull; Privacy &bull; Terms</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

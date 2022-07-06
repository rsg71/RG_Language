import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default function PageContainer({ children }) {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

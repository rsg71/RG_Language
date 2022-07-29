import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

interface Props {
    children: JSX.Element[];
}

export default function PageContainer({ children }: Props) {
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

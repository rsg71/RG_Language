import React from 'react';
import { Spinner } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

interface Props {
    cardTitle?: string
}

export default function LoadingCard({ cardTitle }: Props) {
    return (
        <div>
            <Card>
                <Card.Body>
                    <div className="d-flex justify-content-center align-items-center p-5">
                        <Spinner animation="border" variant="primary" /> <span className="ml-2" style={{fontWeight:"bold"}}>{cardTitle ? `${cardTitle}...` : "Loading..."}</span>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

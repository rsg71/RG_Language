import React from 'react';
import { Spinner } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function LoadingCard({ cardTitle }) {
    return (
        <div>
            <Card>
                <Card.Body>
                    <div className="d-flex justify-content-center align-items-center p-5">
                        <Spinner animation="border" variant="primary" size="md"/> <span className="ml-2" style={{fontWeight:"bold"}}>{cardTitle ? `${cardTitle}...` : "Loading..."}</span>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

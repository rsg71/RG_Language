import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export default function GoToButton({ destination, children }) {

    let navigate = useNavigate();

    return (
        <>
            <Button variant="primary" onClick={() => navigate(destination)}>
                {children} <i className="bi bi-arrow-right-circle"></i>
            </Button>
        </>
    )
}

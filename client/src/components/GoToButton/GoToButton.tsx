import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

interface Props {
    destination: string;
    children: JSX.Element;
}

export default function GoToButton({ destination, children }: Props) {

    let navigate = useNavigate();

    return (
        <>
            <Button variant="primary" onClick={() => navigate(destination)}>
                {children} <i className="bi bi-arrow-right-circle"></i>
            </Button>
        </>
    )
}

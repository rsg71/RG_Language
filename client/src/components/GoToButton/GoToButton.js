import React from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

export default function GoToButton({ destination, children }) {

    let history = useHistory();

    return (
        <>
            <Button variant="primary" onClick={() => history.push(destination)}>
                {children} <i className="bi bi-arrow-right-circle"></i>
            </Button>
        </>
    )
}

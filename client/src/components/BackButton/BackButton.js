import React from 'react';
import { Button } from 'react-bootstrap';

export default function BackButton({handleClick}) {
    return (
        <div>
             <Button type="button" onClick={handleClick}>
                            <i className="fas fa-arrow-circle-left"></i> Back
                </Button>
        </div>
    )
}

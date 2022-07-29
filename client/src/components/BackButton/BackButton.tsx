import React from 'react';
import { Button } from 'react-bootstrap';

interface Props {
    handleClick: any;
}

export default function BackButton({handleClick}: Props) {
    return (
        <div>
             <Button type="button" onClick={handleClick}>
                            <i className="fas fa-arrow-circle-left"></i> Back
                </Button>
        </div>
    )
}

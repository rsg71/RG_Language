import React from 'react'
import { ProgressBar } from 'react-bootstrap';

interface Props {
    currentVal: number;
}

export default function QuizProgressBar({currentVal}: Props) {
    return (
        <div>
            <ProgressBar now={currentVal} />
        </div>
    )
}

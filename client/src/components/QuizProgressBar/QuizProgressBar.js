import React from 'react'
import { ProgressBar } from 'react-bootstrap'

export default function QuizProgressBar(props) {
    return (
        <div>
            <ProgressBar now={props.currentVal} />
        </div>
    )
}

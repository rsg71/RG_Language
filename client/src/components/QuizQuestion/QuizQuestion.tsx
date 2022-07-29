import React from 'react'
// import { Button, FormControl, InputGroup } from 'react-bootstrap'

interface Props {
    word: string;
}

export default function QuizQuestion({word}: Props) {

    return (
        <h1>Translate: {word}</h1>
    )
}

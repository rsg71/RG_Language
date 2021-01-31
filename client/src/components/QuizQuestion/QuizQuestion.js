import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'


export default function QuizQuestion(props) {




    return (
        <>

            <h1>Translate:{props.data.meaning}</h1>
            
            <input placeholder="translate ${props.data.word}"/><button onClick={}>Enter</button>
          
        </>
    )
}

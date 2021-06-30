import React from 'react'
import { Button, Form, InputGroup } from "react-bootstrap"

export default function QuizInput({handleSubmit, userInput,handleInputChange, correct, inputRef }) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputGroup className="mt-5">

                    <Form.Control id="quizInputField" type="text" placeholder="translate here" value={userInput} onChange={e => handleInputChange(e)}
                        className={correct && "correctAnswerInputBox"}
                        readOnly={correct}
                        ref={inputRef}
                        onSubmit={() => console.log('submitted')}
                    />
                    <InputGroup.Append>
                        <Button type="submit" variant="outline-secondary" >check</Button>
                    </InputGroup.Append>
                </InputGroup>
            </form>
        </>
    )
}

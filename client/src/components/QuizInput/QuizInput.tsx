import React from 'react';
import { Button, Form, InputGroup } from "react-bootstrap";

interface Props {
    handleSubmit: any;
    userInput: string;
    handleInputChange: (input: React.ChangeEvent<HTMLInputElement>) => void;
    correct: boolean;
    inputRef: any;
}

export default function QuizInput({handleSubmit, userInput, handleInputChange, correct, inputRef }: Props) {

    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputGroup className="mt-5">

                    <Form.Control id="quizInputField" type="text" placeholder="translate here" value={userInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                        className={correct ? "correctAnswerInputBox" : ""}
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

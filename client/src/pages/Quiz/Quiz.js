import React, { useState, useEffect, useRef } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import QuizQuestion from "../../components/QuizQuestion/QuizQuestion"
import QuizProgressBar from "../../components/QuizProgressBar/QuizProgressBar"
import Data from "../../data/data.json"
// import API from "../../utils/API"
import "./Quiz.css"



export default function Quiz() {

    const inputRef = useRef(null)
    const [correctAnswers, setCorrectAnswers] = useState(0)

    const [questionIndex, setQuestionIndex] = useState(0)
    const [wordToTranslate, setWordToTranslate] = useState("")
    const [answer, setAnswer] = useState()
    const [userInput, setUserInput] = useState("")
    const [questionsLength, ] = useState(4)

    const [correct, setCorrect] = useState(false)


    console.log(`question index: ${questionIndex}, question length: ${questionsLength}`)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    useEffect(() => {
        if (questionIndex < questionsLength) {
            renderQuestion()
        }
    }, [questionIndex])


    function renderQuestion() {
        // console.log(`now questionIndex from render question function is : ${questionIndex}`)
        setWordToTranslate(Data[questionIndex].word);
        setAnswer(Data[questionIndex].translation)
    }


    function verifyAnswer(value) {
        if (value === answer) {
            console.log("answer is correct!");
            setCorrect(true)

            setTimeout(() => {
            setCorrectAnswers(correctAnswers + 1);
            if (questionIndex < questionsLength) {
                setUserInput("")
                setQuestionIndex(questionIndex + 1)
                // renderQuestion()    
                setCorrect(false)
            }
            },2000)
        }
    }


    function handleInputChange(event) {
        event.preventDefault();
        const { value } = event.target;

        setUserInput(value);

        verifyAnswer(value);
    }



    return (

        <>
            <Container >

                <Row>
                    <Col>
                        <Link to="/spanish"><Button><i className="fas fa-arrow-circle-left"></i> Back</Button></Link>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <QuizProgressBar currentVal={(questionIndex) / questionsLength * (100)} />
                    </Col>
                </Row>




                {
                    questionIndex < questionsLength ? 
                    <>
                    <Row>
                    <Col xs="10" sm="6" lg="4">

                        <QuizQuestion word={wordToTranslate} />
                        <Form>
                            <Form.Group >
                                <Form.Label>Translate:</Form.Label>
                                <Form.Control id="quizInputField" type="text" placeholder="translate here" value={userInput} onChange={e => handleInputChange(e)} 
                                className={userInput === answer? "correctAnswerInputBox": "notAnswered"}
                                readOnly={correct}
                                ref={inputRef}
                                onSubmit={() => console.log('submitted')}
                                />
                            </Form.Group>
                        </Form>


                    </Col>
                </Row>

                <Row>
                    <Col>
                        {userInput === answer && 
                        <span className="correctSpan"><i id="correctAnswerCheck" className="far fa-check-circle"></i> Correct!</span>}
                    </Col>
                </Row>
                </>

                        :

                        <>

                            <Row>
                                <Col>
                                    <h1>Quiz over</h1>
                                    <h2>You got {correctAnswers} / {questionsLength} correct</h2>
                            </Col>
                            </Row>

                        </>
                }
            </Container>
        </>
    )
}

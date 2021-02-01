import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import QuizQuestion from "../../components/QuizQuestion/QuizQuestion"
import QuizProgressBar from "../../components/QuizProgressBar/QuizProgressBar"
import Data from "../../data/data.json"
import API from "../../utils/API"
import "./Quiz.css"



export default function Quiz() {

    const [questionIndex, setQuestionIndex] = useState(0)
    const [wordToTranslate, setWordToTranslate] = useState("")
    const [answer, setAnswer] = useState()
    const [userInput, setUserInput] = useState("")
    const [questionsLength, setQuestionsLength] = useState()


    console.log(`question index: ${questionIndex}, question length: ${questionsLength}`)

    useEffect(() => {
        setQuestionsLength(4)
        renderQuestion()
    }, [])


    // useEffect(() => {
    //     verifyAnswer(userInput)
    // }, [userInput])



    function renderQuestion() {
        console.log(`now our questionIndex from render question function is : ${questionIndex}`)
            setWordToTranslate(Data[questionIndex].word);
            setAnswer(Data[questionIndex].translation)
    }



    function verifyAnswer(value) {
        if (value === answer) {
            console.log("answer is correct!");
            if (questionIndex < questionsLength) {
                setQuestionIndex(questionIndex + 1)
                renderQuestion()
            }
        }
    }


    function handleInputChange(event) {
        const {value} = event.target;

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

                <Row>
                    <Col xs="10" sm="6" lg="4">

                        <QuizQuestion word={wordToTranslate} />
                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Translate:</Form.Label>
                                <Form.Control type="text" placeholder="translate here" value={userInput} onChange={e => handleInputChange(e)} />
                            </Form.Group>
                        </Form>


                    </Col>
                </Row>

                <Row>
                    <Col>
                        {userInput.trim() === answer && <i id="correctAnswerCheck" className="far fa-check-circle"></i>}
                    </Col>
                </Row>

                {/* <Row>
                    <Col>
                        quiz over
                            </Col>
                </Row> */}

            </Container>
        </>
    )
}

import React, { useState, useEffect, useRef } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import QuizQuestion from "../../../components/QuizQuestion/QuizQuestion"
import QuizProgressBar from "../../../components/QuizProgressBar/QuizProgressBar"
import QuizInput from "../../../components/QuizInput/QuizInput";
import Data from "../../../data/secretlanguage.json"
// import API from "../../utils/API"
import { useNavigate } from "react-router-dom";

import "./SecretLanguageQuiz.css"



export default function SecretLanguageQuiz() {

    const inputRef = useRef(null)
    const [correctAnswers, setCorrectAnswers] = useState(0)

    const [questionIndex, setQuestionIndex] = useState(0)
    const [wordToTranslate, setWordToTranslate] = useState("")
    const [answer, setAnswer] = useState()
    const [userInput, setUserInput] = useState("")
    const [questionsLength,] = useState(70)

    const [correct, setCorrect] = useState(false)
    const [answerIsIncorrect, setAnswerIsIncorrect] = useState(false);


    // console.log(`question index: ${questionIndex}, question length: ${questionsLength}`)

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
        setWordToTranslate(Data[questionIndex].english);
        setAnswer(Data[questionIndex].foreign)
    }

    function verifyAnswer(value) {
        console.log("verify answer value is: ", value)
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
            }, 2000)
        } else if (value !== answer) {
            console.log("answer is incorrect")
            setAnswerIsIncorrect(true);
            // setAnswerIsIncorrect(true);
            setTimeout(() => {
                if (questionIndex < questionsLength) {
                    setUserInput("")
                    setQuestionIndex(questionIndex + 1)
                    // renderQuestion()    
                    setCorrect(false);
                    setAnswerIsIncorrect(false);
                }
            }, 2000)
        }
    }

    function handleInputChange(event) {
        event.preventDefault();
        const { value } = event.target;
        setUserInput(value);
        // verifyAnswer(value);
    }


    // function handleEnterKeyPress(e) {
    //     console.log(e)
    // }


    function handleSubmit(e) {
        // const { value } = e.target;

        e.preventDefault();
        verifyAnswer(userInput)

        // if (value !== answer) {
        //     setAnswerIsIncorrect(true);
        // }
    }

    let navigate = useNavigate()

    function handleClick() {
        navigate("/secret");
        // console.log("history" + history)
    }

    return (

        <>
            <Container >

                <Row>
                    <Col>

                        <Button type="button" onClick={handleClick}>
                            <i className="fas fa-arrow-circle-left"></i> Back
                        </Button>
                    </Col>
                </Row>

                <h6>Progress: {questionIndex}/{questionsLength}</h6>
                <QuizProgressBar currentVal={(questionIndex) / questionsLength * (100)} />

                {questionIndex < questionsLength ?
                    <>
                        <Row>
                            <Col xs="10" sm="6" lg="4">

                                <QuizQuestion word={wordToTranslate} />

                                <QuizInput handleSubmit={handleSubmit} userInput={userInput} handleInputChange={handleInputChange} correct={correct} inputRef={inputRef} />

                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                {correct &&
                                    <h5 className="correctSpan"><i id="correctAnswerCheck" className="far fa-check-circle"></i> Correct!</h5>}

                                {answerIsIncorrect &&
                                    <h4 className="text-danger" >
                                        <i className="bi bi-x-square"></i> incorrect..
                                    </h4>}
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

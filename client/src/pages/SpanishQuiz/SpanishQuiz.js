import React, { useState, useEffect, useRef } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import QuizQuestion from "../../components/QuizQuestion/QuizQuestion"
import QuizProgressBar from "../../components/QuizProgressBar/QuizProgressBar"
import API from "../../utils/API"
import "./SpanishQuiz.css"




export default function SpanishQuiz() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const inputRef = useRef(null)
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const [currentWord, setCurrentWord] = useState({});

    const [questionIndex, setQuestionIndex] = useState(0)
    const [wordToTranslate, setWordToTranslate] = useState("")
    const [answer, setAnswer] = useState()
    const [userInput, setUserInput] = useState("")
    const [questionsLength, setQuestionsLength] = useState(0);

    const [correct, setCorrect] = useState(false);


    // ==============================================================
    const [totalSpanishWords, setTotalSpanishWords] = useState([]);

    useEffect(() => {
        loadWords()
    }, [])



    function loadWords() {
        setLoading(true);
        API.getAllSpanishWords()
            .then(res => {
                console.log(res);
                setTotalSpanishWords(res.data);
                setCurrentWord(res.data[0]);
                setQuestionsLength(res.data.length);

                setLoading(false);
                setLoaded(true);
                setError(false);

            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                setLoaded(false);
                setError(true);

            })
    }
    // ==============================================================



    // console.log(`question index: ${questionIndex}, question length: ${questionsLength}`)

    useEffect(() => {
        if (loaded) {

            if (questionsLength > 0 && loaded && !error) {
                inputRef.current.focus()
            }
        }

    }, [questionsLength, loaded])

    useEffect(() => {
        if (loaded) {
            if (totalSpanishWords.length > 0) {
                if (questionIndex < questionsLength) {
                    renderQuestion()
                }
            }
        }

    }, [questionIndex, totalSpanishWords, loaded])


    function renderQuestion() {
        // console.log(`now questionIndex from render question function is : ${questionIndex}`)
        setCurrentWord(totalSpanishWords[questionIndex]);
        setWordToTranslate(totalSpanishWords[questionIndex].word);
        setAnswer(totalSpanishWords[questionIndex].translation)
    }


    async function verifyAnswer(value) {
        if (value === answer) {
            console.log("answer is correct!");
            setCorrect(true);

            let res = await API.answerCorrectly(currentWord._id);
            console.log("word correctly answered res: ", res);

            setTimeout(() => {
                setCorrectAnswers(correctAnswers + 1);
                if (questionIndex < questionsLength) {
                    setUserInput("")
                    setQuestionIndex(questionIndex + 1)
                    // renderQuestion()    
                    setCorrect(false)
                }
            }, 2000)
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
                {error && <div>Error</div>}
                {loading && <div>Loading...</div>}

                {loaded && !error && !loading &&
                    <>
                        <Row>
                            <Col className="mb-3">
                                <Link to="/spanish"><Button><i className="fas fa-arrow-circle-left"></i> Back</Button></Link>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <QuizProgressBar currentVal={(questionIndex) / questionsLength * (100)} />
                            </Col>
                        </Row>


                        {questionIndex < questionsLength ?
                            <>
                                <Row>
                                    <Col xs="10" sm="6" lg="4">

                                        <QuizQuestion word={wordToTranslate} />
                                        <Form>
                                            <Form.Group >
                                                <Form.Label>Translate:</Form.Label>
                                                <Form.Control id="quizInputField" type="text" placeholder="translate here" value={userInput} onChange={e => handleInputChange(e)}
                                                    className={userInput === answer ? "correctAnswerInputBox" : "notAnswered"}
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
                    </>
                }

            </Container>
        </>
    )
}
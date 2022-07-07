import React, { useState, useEffect, useRef } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import QuizQuestion from "../../components/QuizQuestion/QuizQuestion"
import QuizProgressBar from "../../components/QuizProgressBar/QuizProgressBar"
import API from "../../utils/API"
import accentMarks from "../../utils/accentmarks/french"
import LoadingCard from "../../components/LoadingCard/LoadingCard"
import "../Quiz/Quiz.css"



export default function FrenchQuiz() {

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
    const [incorrectAnswer, setIncorrectAnswer] = useState(false);


    // ==============================================================
    const [totalSpanishWords, setTotalSpanishWords] = useState([]);

    useEffect(() => {
        loadWords()
    }, [])

    function loadWords() {
        setLoading(true);
        API.getAllUnlearnedWords('french')
            .then(res => {
                console.log(res);
                let notAnsweredCorrectly = res.data.filter(words => words.answeredCorrectly === false)
                setTotalSpanishWords(notAnsweredCorrectly);
                setCurrentWord(notAnsweredCorrectly[0]);
                setQuestionsLength(notAnsweredCorrectly.length);

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
        setWordToTranslate(totalSpanishWords[questionIndex].translation);
        setAnswer(totalSpanishWords[questionIndex].word);
    }


    async function verifyAnswer(value, enterKeyPressed) {
        if (value === answer) {
            console.log("answer is correct!");
            setCorrect(true);
            setIncorrectAnswer(false);

            let res = await API.answerFrenchCorrectly(currentWord._id);
            console.log("word correctly answered res: ", res);

            setTimeout(() => {
                setCorrectAnswers(correctAnswers + 1);
                if (questionIndex < questionsLength) {
                    setUserInput("")
                    setQuestionIndex(questionIndex + 1)
                    // renderQuestion()    
                    setCorrect(false)
                }
            }, 2000);
        } else if (enterKeyPressed) {
            setCorrect(false);
            setIncorrectAnswer(true);
            setTimeout(() => {
                setQuestionIndex(questionIndex + 1);
                setUserInput("");
                setIncorrectAnswer(false);
            }, 2000);
        }
    }


    function handleInputChange(e) {
        e.preventDefault();
        const { value } = e.target;
        let lowercaseValue = value.toLowerCase();

        setUserInput(lowercaseValue);

        let enterKeyPressed = false
        verifyAnswer(lowercaseValue, enterKeyPressed);
    }


    const typeAccent = (value) => {
        setUserInput(userInput + value);

    }

    const handleEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            let enterKeyPressed = true;
            verifyAnswer(userInput, enterKeyPressed);
        }
    }


    return (

        <>
            <Container >
                {error && <div>Error</div>}
                {loading && <div><LoadingCard /></div>}


                {loaded && !error && !loading &&
                    <>
                        <Row>
                            <Col className="mb-3">
                                <Link to="/french"><Button><i className="fas fa-arrow-circle-left"></i> Back</Button></Link>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <QuizProgressBar currentVal={(questionIndex) / questionsLength * (100)} />
                                <div className="float-right">word {questionIndex + 1} / {questionsLength}</div>
                            </Col>
                        </Row>


                        {
                            questionIndex < questionsLength ?
                                <>
                                    <Row>
                                        <Col xs="10" sm="6" lg="4">

                                            <QuizQuestion word={wordToTranslate} />

                                            <div className="my-3">
                                                {accentMarks.map(mark => (
                                                    <button key={mark.unicode} onClick={e => typeAccent(mark.letter)}>{mark.letter}</button>
                                                ))}
                                            </div>


                                            <Form.Label>Translate:</Form.Label>
                                            <Form.Control id="quizInputField" type="text" placeholder="translate here" value={userInput} onChange={e => handleInputChange(e)}
                                                className={userInput === answer ? "correctAnswerInputBox" : "notAnswered"}
                                                readOnly={correct}
                                                ref={inputRef}
                                                onSubmit={e => e.preventDefault()}
                                                onKeyDown={e => handleEnterKeyPress(e)}
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            {userInput === answer &&
                                                <span className="correctSpan"><i id="correctAnswerCheck" className="far fa-check-circle"></i> Correct!</span>}
                                            {incorrectAnswer &&
                                                <span className="text-danger">Incorrect</span>}
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

import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Breadcrumb } from 'react-bootstrap';
import { Link, useParams, useNavigate } from "react-router-dom";
import Error from 'components/Error/Error';
import LoadingCard from 'components/LoadingCard/LoadingCard';
import QuizProgressBar from 'components/QuizProgressBar/QuizProgressBar';
import QuizQuestion from 'components/QuizQuestion/QuizQuestion';
import API from 'utils/API';

export default function GenericReview() {

    const navigate = useNavigate();

    let { languageName: languageNameUrlParam } = useParams();

    const [wordsToReview, setWordsToReview] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    const [noWordsToTranslate, setNoWordsToTranslate] = useState(false);


    const inputRef = useRef(null)
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const [currentWord, setCurrentWord] = useState<any>({});

    const [questionIndex, setQuestionIndex] = useState(0)
    const [wordToTranslate, setWordToTranslate] = useState("")
    const [answer, setAnswer] = useState()
    const [userInput, setUserInput] = useState("")
    const [questionsLength, setQuestionsLength] = useState(0);

    const [correct, setCorrect] = useState(false);





    useEffect(() => {
        setIsLoading(true);
        if (languageNameUrlParam) {

            API.getWordsForReviewForLanguageForUser(languageNameUrlParam)
                .then(res => {
                    console.log("words to review: ", res);

                    let words = res.data;

                    setWordsToReview(words);
                    setIsLoading(false);
                    setIsLoaded(true);

                    if (words.length > 0) {
                        setCurrentWord(words[0]);
                        setQuestionsLength(words.length);

                        setCurrentWord(words[0]);
                        setWordToTranslate(words[0].word);
                        setAnswer(words[0].translation)
                    } else {
                        setNoWordsToTranslate(true);
                    }


                })
                .catch(err => {
                    console.log(err);
                    setError(true);
                    setIsLoading(false);
                    setIsLoaded(true);
                })
        }

    }, [])


    useEffect(() => {
        if (isLoaded && wordsToReview.length > 0) {
            console.log(wordsToReview)
            if (questionIndex < questionsLength) {
                renderQuestion()
            }
        }

    }, [questionIndex, wordsToReview])


    function renderQuestion() {
        setCurrentWord(wordsToReview[questionIndex]);
        setWordToTranslate(wordsToReview[questionIndex].word);
        setAnswer(wordsToReview[questionIndex].translation)
    }


    async function verifyAnswer(value: string) {
        if (value === answer) {
            console.log("answer is correct!");
            setCorrect(true);
            if (languageNameUrlParam) {
                let res = await API.answerWordCorrectly(languageNameUrlParam, currentWord._id, currentWord.word);
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
    }


    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();

        const { value } = event.target;

        setUserInput(value);

        verifyAnswer(value);
    }


    return (
        <div>


            <Container>

                <Breadcrumb className="bg-white">
                    <Breadcrumb.Item as={Link} to="/user-home" onClick={() => navigate("/user-home")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Up for Review
                    </Breadcrumb.Item>
                </Breadcrumb>


                <h1 className="mb-3">Up for Review</h1>

                {error && <Error />}
                {isLoading && <LoadingCard />}

                {isLoaded && !error && !isLoading &&
                    <>

                        {noWordsToTranslate ? <div className="bg-light text-muted p-3">No words to review at this time</div>
                            :
                            <>
                                <Row>
                                    <Col className="mb-3">
                                        <Link to="/user-home"><Button><i className="fas fa-arrow-circle-left"></i> Back</Button></Link>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <QuizProgressBar currentVal={(questionIndex) / questionsLength * (100)} />
                                        <div className="d-flex justify-content-end">{questionIndex}/{questionsLength} </div>
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
                                                        <Form.Control id="quizInputField" type="text" placeholder="translate here" value={userInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                                                            className={userInput === answer ? "correctAnswerInputBox" : "notAnswered"}
                                                            readOnly={correct}
                                                            ref={inputRef}

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
                                    <Row>
                                        <Col>
                                            <h1>Quiz over</h1>
                                            <h2>You got {correctAnswers} / {questionsLength} correct</h2>
                                        </Col>
                                    </Row>
                                }


                            </>
                        }
                    </>
                }

            </Container>

        </div>
    )
}

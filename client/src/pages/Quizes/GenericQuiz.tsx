import React, { useState, useEffect, useRef } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import QuizQuestion from "../../components/QuizQuestion/QuizQuestion"
import QuizProgressBar from "../../components/QuizProgressBar/QuizProgressBar"
import API from "../../utils/API"
import accentMarks from "../../utils/accentmarks/allAccentMarks"
import LoadingCard from "../../components/LoadingCard/LoadingCard"
import "../SpanishQuiz/SpanishQuiz.css"
import Error from "../../components/Error/Error"
import { capitalizeFirstLetter } from '../../utils/helperFunctions';



export default function GenericQuiz() {

    let { languageName: languageNameUrlParam } = useParams();

    // console.log("languageNameUrlParam: ", languageNameUrlParam);
    let marks = accentMarks as any;
    const thisLanguageAccentMarks = marks[`${languageNameUrlParam}`];

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const inputRef = useRef<any>(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const [currentWord, setCurrentWord] = useState<any>({});

    const [questionIndex, setQuestionIndex] = useState(0);
    const [wordToTranslate, setWordToTranslate] = useState("");
    const [answer, setAnswer] = useState();
    const [userInput, setUserInput] = useState("");
    const [questionsLength, setQuestionsLength] = useState(0);

    const [correct, setCorrect] = useState(false);
    const [incorrectAnswer, setIncorrectAnswer] = useState(false);


    // ==============================================================
    const [totalWordsInLanguage, setWordsInLanguage] = useState<any[]>([]);

    const [wordsInQuiz, setWordsInQuiz] = useState<any[]>([]);
    const [isQuizOver, setIsQuizOver] = useState(false);


    const resetAndReload = () => {
        setCorrectAnswers(0);
        setQuestionIndex(0);
        setQuestionsLength(0);

        loadWords();

        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    useEffect(() => {
        loadWords()
    }, [])

    function loadWords() {
        setLoading(true);
        API.getAllUnlearnedWords(languageNameUrlParam)
            .then(res => {
                console.log("words for this quiz: ", res.data);
                let notAnsweredCorrectly = res.data.wordsLearned;
                setWordsInLanguage(notAnsweredCorrectly);

                let words = notAnsweredCorrectly.map((word: any) => {
                    return { ...word, correct: false }
                }); // add the field "correct" to the object
                setWordsInQuiz(words); // note: may want to rename
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

    // focus on current question
    useEffect(() => {
        if (loaded) {
            if (questionsLength > 0 && loaded && !error) {
                if (inputRef.current) {
                    inputRef.current.focus()
                }
            }
        }
    }, [questionsLength, loaded])


    // render the question
    useEffect(() => {
        if (loaded) {
            if (totalWordsInLanguage.length > 0) {
                if (questionIndex < questionsLength) {
                    renderQuestion()
                } else {
                    setIsQuizOver(true);
                }
            }
        }

    }, [questionIndex, totalWordsInLanguage, loaded])


    function renderQuestion() {
        // console.log(`now questionIndex from render question function is : ${questionIndex}`)
        setCurrentWord(totalWordsInLanguage[questionIndex]);
        setWordToTranslate(totalWordsInLanguage[questionIndex].translation);
        setAnswer(totalWordsInLanguage[questionIndex].word);
    }


    async function verifyAnswer(value: string, enterKeyPressed: boolean) {
        if (value === answer) {
            console.log('value: ', value);
            console.log('answer: ', answer);
            console.log("answer is correct!");
            setCorrect(true);
            setIncorrectAnswer(false);

            let res = await API.answerWordCorrectly(languageNameUrlParam, currentWord._id, currentWord.word);
            console.log("word correctly answered res: ", res);

            console.log('wordsInQuiz: ', wordsInQuiz);
            // now update this quiz's words for the session
            let index = wordsInQuiz.findIndex(obj => obj.word === answer);
            console.log('index: ', index);
            console.log('word to compare is: ', value);
            let copy = [...wordsInQuiz];
            copy[index].correct = true;
            setWordsInQuiz(copy);


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
            let res = await API.answerWordIncorrectly(languageNameUrlParam, currentWord._id, currentWord.word);
            console.log("word incorrectly answered res: ", res);

            let index = wordsInQuiz.findIndex(obj => obj.word === answer);
            console.log('index: ', index);
            console.log('word to compare is: ', value);
            let copy = [...wordsInQuiz];
            copy[index].correct = false;
            setWordsInQuiz(copy);


            setTimeout(() => {
                setQuestionIndex(questionIndex + 1);
                setUserInput("");
                setIncorrectAnswer(false);
            }, 2000);
        }
    }


    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        const { value } = e.target;
        let lowercaseValue = value.toLowerCase();

        setUserInput(lowercaseValue);

        let enterKeyPressed = false
        verifyAnswer(lowercaseValue, enterKeyPressed);
    }


    const typeAccent = (value: string) => {
        setUserInput(userInput + value);
        inputRef.current.focus();

    }

    const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            let enterKeyPressed = true;
            verifyAnswer(userInput, enterKeyPressed);
        }
    }



    const resetQuizWhenIncorrectWordsRemain = () => {
        setCorrectAnswers(0);
        setQuestionIndex(0);
        setQuestionsLength(0);

        // loadWords();
        let words = wordsInQuiz.filter(word => word.correct === false);
        setWordsInLanguage(words);

        console.log('resetting quiz, words are: ', words);

        // let words = notAnsweredCorrectly.map(word => {
        //     return { ...word, correct: false }
        // }); // add the field "correct" to the object
        // no longer a need to add these. We are already using the wordsInQuiz which have a 'correct': false key value pair
        // at this point
        setWordsInQuiz(words); // note: may want to rename
        setCurrentWord(words[0]);
        setQuestionsLength(words.length);
        setIsQuizOver(false);

        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    const isQuizOngoing = questionIndex < questionsLength;


    const doIncorrectWordsRemainForThisQuiz = wordsInQuiz.some(word => word.correct === false);


    useEffect(() => {
        if (isQuizOver) {
            console.log('questionIndex: ', questionIndex);
            console.log('questionsLength: ', questionsLength);

            console.log('QUIZ IS OVER')
            if (doIncorrectWordsRemainForThisQuiz) {
                console.log('doIncorrectWordsRemainForThisQuiz: ', doIncorrectWordsRemainForThisQuiz);
                resetQuizWhenIncorrectWordsRemain();
            }
        }

    }, [isQuizOver]);

    return (

        <>
            <Container >
                {error && <Error />}
                {loading && <div><LoadingCard /></div>}
                {/* <pre>{JSON.stringify(wordsInQuiz, null, 4)}</pre> */}
                {/* <pre>isQuizOver: {isQuizOver.toString()}</pre> */}

                {loaded && !error && !loading &&
                    <>
                        <Row>
                            <Col className="mb-3">
                                <Link to={`/generic/${languageNameUrlParam}`}><Button><i className="fas fa-arrow-circle-left"></i> Back</Button></Link>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <QuizProgressBar currentVal={(questionIndex) / questionsLength * (100)} />
                                <div className="float-right">

                                    {questionIndex + 1 > questionsLength ?
                                        <>
                                            word {questionIndex} / {questionsLength}
                                        </>
                                        :
                                        <>
                                            word {questionIndex + 1} / {questionsLength}
                                        </>
                                    }
                                </div>
                            </Col>
                        </Row>


                        {isQuizOngoing ?
                            <>
                                <Row>
                                    <Col xs="10" sm="6" lg="4">

                                        <QuizQuestion word={wordToTranslate} />

                                        <div className="my-3">
                                            {thisLanguageAccentMarks.map((mark: any) => (
                                                <button key={mark.letter} onClick={e => typeAccent(mark.letter)}>{mark.letter}</button>
                                            ))}
                                        </div>


                                        <Form.Label>Translate:</Form.Label>
                                        <Form.Control id="quizInputField" type="text" placeholder="translate here" value={userInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                                            className={userInput === answer ? "correctAnswerInputBox" : "notAnswered"}
                                            readOnly={correct || incorrectAnswer}
                                            ref={inputRef}
                                            onSubmit={(e: any) => e.preventDefault()}
                                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleEnterKeyPress(e)}
                                        />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        {userInput === answer &&
                                            <span className="correctSpan"><i id="correctAnswerCheck" className="far fa-check-circle"></i> Correct!</span>}
                                        {incorrectAnswer &&
                                            <span className="text-danger">Incorrect. {answer}</span>}
                                    </Col>
                                </Row>
                            </>

                            :

                            <>
                                <Row>
                                    <Col>
                                        <h1>Quiz over</h1>
                                        {/* <h4>You got {correctAnswers} / {questionsLength} correct</h4> */}


                                        {/* {doIncorrectWordsRemainForThisQuiz &&
                                            <div>
                                                <p>Here are the words you got wrong: </p>
                                                <ol>
                                                    {
                                                        wordsInQuiz.filter(word => word.correct === false).map(word => (
                                                            <li key={word.word}>{word.word}</li>
                                                        ))
                                                    }
                                                </ol>

                                                <button onClick={resetQuizWhenIncorrectWordsRemain}>reset and review incorrect words from this quiz</button>

                                            </div>
                                        } */}


                                        <p className="mt-3">Ready for more? <button className="btn btn-sm btn-success" onClick={resetAndReload}>Learn 15 more words</button></p>

                                        <p>Or <Link to={`/generic/${languageNameUrlParam}`}>back to {capitalizeFirstLetter(languageNameUrlParam || "")} home</Link></p>

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

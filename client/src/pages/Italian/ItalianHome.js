import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import API from "../../utils/API"
import Progress from '../../components/Progress/Progress'
import GoToButton from '../../components/GoToButton/GoToButton'
import LoadingCard from '../../components/LoadingCard/LoadingCard'

export default function ItalianHome() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const [totalSpanishWords, setTotalSpanishWords] = useState(0);
    const [numberAnsweredCorrectly, setNumberAnsweredCorrectly] = useState(0);
    const [correctWords, setCorrectWords] = useState([]);
    const [incorrectWords, setIncorrectWords] = useState([]);
    const [percentCorrect, setPercentCorrect] = useState(0);
    const [numberWordsForReview, setNumberWordsForReview] = useState(0);


    useEffect(() => {
        loadWords()
    }, []);

    function loadWords() {
        setLoading(true);


        API.getItalianWordsForReview()
            .then(res => {
                setNumberWordsForReview(res.data.length);


                API.getAllItalianWords()
                    .then(res => {
                        console.log("total length of italian words: ", res.data.length);
                        console.log("all words: ", res);
                        let totalWords = res.data;
                        console.log("total words length: ", totalWords.length)
                        setTotalSpanishWords(totalWords.length);

                        let correctWords = totalWords.filter(word => word.answeredCorrectly === true);
                        setCorrectWords(correctWords);
                        setNumberAnsweredCorrectly(correctWords.length);
                        setPercentCorrect((correctWords.length / totalWords.length * 100).toFixed(0));

                        console.log("total words corr: ", correctWords.length / totalWords.length);

                        let incorrectWords = totalWords.filter(word => word.answeredCorrectly);
                        setIncorrectWords(incorrectWords);

                        setLoading(false);
                        setLoaded(true);
                        setError(false);

                    })
                    .catch(err => {
                        handleError(err);
                    })

            })
            .catch(err => {
                handleError(err);
            })



    }

    const handleError = (err) => {
        console.log(err);
        setLoading(false);
        setLoaded(false);
        setError(true);
    }


    return (
        <>
            <Container>
                {error && <div>Error loading</div>}
                {loading && <LoadingCard />}
                {loaded && !error && !loading &&
                    <>
                        <Row>
                            <Col>
                                <h1 className="mb-2">Italian home</h1>
                                <div className="form-text text-muted">Words learned:</div>
                                <Progress percent={percentCorrect} />
                                <h2 style={{ float: "right" }}>{totalSpanishWords} total</h2>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <img src="images/backgrounds/italy_bg.jpg" class="img-fluid" alt="..." />
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <div>Continue learning:</div>
                                <GoToButton destination={"/italian-quiz"}>Practice vocab</GoToButton>
                            </Col>

                            <Col>
                                <div>Up for review: {numberWordsForReview} words</div>
                                <GoToButton destination={"/spanish/up-for-review"}>Review words</GoToButton>
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <div>Add new words:</div>
                                <GoToButton destination={"/italian-add-words"}>Add words</GoToButton>
                            </Col>
                        </Row>
                    </>
                }

            </Container>

        </>
    )
}

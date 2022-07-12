import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import { Link } from "react-router-dom"
import API from "../../utils/API"
import Progress from '../../components/Progress/Progress'
import GoToButton from '../../components/GoToButton/GoToButton'
import LoadingCard from '../../components/LoadingCard/LoadingCard'
// import DefaultBreadcrumb from '../DefaultBreadcrumb/DefaultBreadcrumb'

export default function Spanish() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const [totalSpanishWords, setTotalSpanishWords] = useState(0);
    // const [numberAnsweredCorrectly, setNumberAnsweredCorrectly] = useState(0);
    // const [correctWords, setCorrectWords] = useState([]);
    // const [incorrectWords, setIncorrectWords] = useState([]);
    const [percentCorrect, setPercentCorrect] = useState(0);
    const [numberWordsForReview, setNumberWordsForReview] = useState(0);


    useEffect(() => {
        loadWords()
    }, []);

    const handleError = (err) => {
        console.log(err);
        setLoading(false);
        setLoaded(false);
        setError(true);
    }

    function loadWords() {
        setLoading(true);

        API.getSpanishWordsForReview()
            .then(res => {
                setNumberWordsForReview(res.data.length);

                API.getAllSpanishWords()
                    .then(res => {
                        console.log("total length of spanish words: ", res.data.length);
                        console.log(res);
                        let totalWords = res.data;
                        console.log("total words length: ", totalWords.length)
                        setTotalSpanishWords(totalWords.length);

                        let correctWords = totalWords.filter(word => word.answeredCorrectly === true);
                        // setCorrectWords(correctWords);
                        // setNumberAnsweredCorrectly(correctWords.length);
                        setPercentCorrect((correctWords.length / totalWords.length * 100).toFixed(0));

                        console.log("total words corr: ", correctWords.length / totalWords.length);

                        // let incorrectWords = totalWords.filter(word => word.answeredCorrectly);
                        // setIncorrectWords(incorrectWords);

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



    return (
        <>
            <Container>

                {error && <div className="bg-light-red">Error loading</div>}
                {loading && <LoadingCard />}
                {loaded && !error && !loading &&
                    <>
                        <Row>
                            <Col>
                                <h1 className="mb-2">Spanish home</h1>
                                <div className="form-text text-muted">Words learned:</div>
                                <Progress percent={percentCorrect} />
                                <h2 style={{ float: "right" }}>{totalSpanishWords} total</h2>
                            </Col>
                        </Row>



                        <Row>
                            <Col>
                                <div>Continue learning:</div>
                                <GoToButton destination={"/spanish-quiz"}>Practice vocab</GoToButton>
                            </Col>
                            <Col>
                                <div>Up for review: {numberWordsForReview} words</div>
                                <GoToButton destination={"/spanish/up-for-review"}>Review words</GoToButton>
                            </Col>
                        </Row>
                    </>
                }

            </Container>

        </>
    )
}

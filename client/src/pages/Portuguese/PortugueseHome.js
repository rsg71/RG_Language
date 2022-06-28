import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import API from "../../utils/API"
import Progress from '../../components/Progress/Progress'
import GoToButton from '../../components/GoToButton/GoToButton'
import LoadingCard from '../../components/LoadingCard/LoadingCard'

export default function PortugueseHome() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const [totalSpanishWords, setTotalSpanishWords] = useState(0);
    const [numberAnsweredCorrectly, setNumberAnsweredCorrectly] = useState(0);
    const [correctWords, setCorrectWords] = useState([]);
    const [incorrectWords, setIncorrectWords] = useState([]);
    const [percentCorrect, setPercentCorrect] = useState(0);


    useEffect(() => {
        loadWords()
    }, []);

    function loadWords() {
        setLoading(true);
        API.getAllPortugueseWords()
            .then(res => {
                console.log("total length of portuguese words: ", res.data.length);
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
                console.log(err);
                setLoading(false);
                setLoaded(false);
                setError(true);
            })
    }


    return (
        <>
            <Container>
                {error && <div>Error loading</div>}
                {loading && <LoadingCard/>}
                {loaded && !error && !loading &&
                    <>
                        <Row>
                            <Col>
                                <h1 className="mb-2">Portuguese home</h1>
                                <div className="form-text text-muted">Words learned:</div>
                                <Progress percent={percentCorrect} />
                                <h2 style={{ float: "right" }}>{totalSpanishWords} total</h2>
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <div>Continue learning:</div>
                                <GoToButton destination={"/portuguese-quiz"}>Practice vocab</GoToButton>
                            </Col>
                        </Row>
                    </>
                }

            </Container>

        </>
    )
}

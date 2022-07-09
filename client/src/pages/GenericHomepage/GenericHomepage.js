import React, { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../App';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helperFunctions';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import API from '../../utils/API';
import Progress from '../../components/Progress/Progress';

export default function GenericHomepage() {
    let { languageName } = useParams();
    let navigate = useNavigate();

    let currentUser = useContext(CurrentUserContext)

    const [isLoaded, setIsLoaded] = useState(false);

    // const [data, setData] ([]);

    const [totalWords, setTotalWords] = useState(0);
    const [percentCorrect, setPercentCorrect] = useState(0);

    const loadData = () => {

        API.getLanguageDataForUser(currentUser._id, languageName)
            .then(res => {
                console.log("languages for this user: ", res.data);

                let totalWords = res.data[0].wordsLearned;

                let correct = totalWords.filter(word => word.answeredCorrectly);
                let numberCorrect = correct.length;
                // console.log("numberCorrect: ", numberCorrect);
                let percentCorrect = ((numberCorrect / totalWords.length) * 100).toFixed(0);
                // console.log("percentCorrect: ", percentCorrect);

                setTotalWords(totalWords.length);
                setPercentCorrect(percentCorrect);

            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        if (currentUser !== null) {
            console.log("currentUser: ", currentUser);
            loadData();
            setIsLoaded(true);
        }
    }, [currentUser]);


    return (
        <div>
            <Container>
                <Row>
                    <Col>

                        <Row className="mb-3">
                            <Col>


                                <Breadcrumb bg="white">
                                    <Breadcrumb.Item as={Link} to="/user-home" onClick={() => navigate("/user-home")}>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active>
                                        {capitalizeFirstLetter(languageName)}
                                    </Breadcrumb.Item>
                                </Breadcrumb>


                                <h1>{capitalizeFirstLetter(languageName)} Home</h1>
                                <div>
                                    <p>language: {languageName}</p>
                                    <div className="form-text text-muted">Words learned:</div>

                                    {isLoaded &&
                                        <>
                                            <Progress percent={percentCorrect} />
                                            <h2 style={{ float: "right" }}>{totalWords} total</h2>
                                        </>
                                    }
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <button className="btn btn-primary" onClick={() => navigate(`/quiz/generic/${languageName}`)}>Learn new words</button>
                            </Col>
                            <Col>
                                <button className="btn btn-primary" onClick={() => navigate(`/review/generic/${languageName}`)}>Review words</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

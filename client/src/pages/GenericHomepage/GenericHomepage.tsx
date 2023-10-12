import React, { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from 'App';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { capitalizeFirstLetter } from 'utils/helperFunctions';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import API from 'utils/API';
import Progress from 'components/Progress/Progress';
import { CurrentUserInterface } from 'utils/interfaces';

export default function GenericHomepage() {
    let { languageName } = useParams();
    let navigate = useNavigate();

    let currentUser: CurrentUserInterface = useContext(CurrentUserContext)

    const [isLoaded, setIsLoaded] = useState(false);

    // const [data, setData] ([]);

    const [totalWords, setTotalWords] = useState(0);
    const [percentCorrect, setPercentCorrect] = useState(0);

    const loadData = () => {
        if (languageName) {
            API.getLanguageDataForUser(currentUser._id, languageName)
                .then(res => {
                    console.log("languages for this user: ", res.data);

                    let totalWords = res.data[0].wordsLearned;

                    let correct = totalWords.filter((word: any) => word.answeredCorrectly);
                    let numberCorrect = correct.length;
                    // console.log("numberCorrect: ", numberCorrect);
                    let percentCorrect = parseFloat(((numberCorrect / totalWords.length) * 100).toFixed(0));
                    // console.log("percentCorrect: ", percentCorrect);

                    setTotalWords(totalWords.length);
                    setPercentCorrect(percentCorrect);

                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    useEffect(() => {
        if (currentUser !== null) {
            console.log("currentUser: ", currentUser);
            loadData();
            setIsLoaded(true);
        }
    }, [currentUser]);


    interface CardProps {
        cardTitle: string;
        navigationDestination: string;
        iconName: string;
    }

    const refreshIcon = "bi bi-arrow-clockwise";
    const notesIcon = "bi bi-card-checklist";

    const MyCard = ({ cardTitle, navigationDestination, iconName }: CardProps) => {
        return (
            <button
                className="shadow-sm p-3 btn text-left w-100 btn-primary"
                onClick={() => navigate(navigationDestination)}
            >
                <span>{cardTitle}</span> <i className={`ms-1 ${iconName}`}></i>
            </button>
        )
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>

                        <Row className="mb-3">
                            <Col>


                                <Breadcrumb className="bg-white">
                                    <Breadcrumb.Item as={Link} to="/user-home" onClick={() => navigate("/user-home")}>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active>
                                        {capitalizeFirstLetter(languageName || "")}
                                    </Breadcrumb.Item>
                                </Breadcrumb>


                                <h1>{capitalizeFirstLetter(languageName || "")} Home</h1>
                                <div>
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
{/* 
                        <Row>
                            <Col>
                                <button className="btn btn-primary" onClick={() => navigate(`/quiz/generic/${languageName}`)}>Learn new words</button>{' '}
                                <button className="btn btn-primary" onClick={() => navigate(`/review/generic/${languageName}`)}>Review words</button>
                            </Col>
                        </Row> */}

                        <Row>
                            <Col>
                                <MyCard
                                    cardTitle="Learn new words"
                                    navigationDestination={`/quiz/generic/${languageName}`}
                                    iconName={notesIcon}
                                />
                            </Col>
                            <Col>
                                <MyCard
                                    cardTitle="Review words"
                                    navigationDestination={`/review/generic/${languageName}`}
                                    iconName={refreshIcon}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';
import API from '../../utils/API';
import LoadingCard from '../../components/LoadingCard/LoadingCard';
import { cardClass1, cardClass2 } from '../../styles/style';
import { CurrentUserContext } from '../../App';

export default function UserHome() {

    let currentUser = useContext(CurrentUserContext);

    const navigate = useNavigate();

    const [data, setData] = useState(null);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        setIsLoadingData(true);

        API.findAllLanguagesForThisUser(currentUser._id)
            .then(res => {
                console.log("userHome retrieve all languages for this user: ", res)

                setData(res.data);
                setIsLoadingData(false);
                setIsLoaded(true);
                setError(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoadingData(false);
                setIsLoaded(true);
                setError(true);
            })
    }, [])



    const goToAddLanguagePage = () => {
        navigate("/add-language")
    }


    return (
        <div>



            <Container>
                <Row>
                    <Col>

                        <h1>Homepage for User</h1>

                        {isLoadingData && <LoadingCard />}
                        {error && <div className="bg-danger text-white">Error</div>}

                        {!isLoadingData && isLoaded && !error && data &&
                            <div>
                                <p>Your languages: </p>

                                {data.length === 0 &&
                                    <>
                                        <div className="bg-light text-muted p-3">
                                            No languages added yet
                                        </div>
                                    </>
                                }

                                <CardDeck id="homeLanguagesCardDeck">

                                    {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}

                                    {data.map(language => (
                                        <Col sm={6} md={6} lg={3} key={language.language}>
                                            <Card key={language.language} bg="light" className="mb-1 p-3 pointer blue" onClick={() => navigate(`/generic/${language.language}`)}>
                                                <div>{language.language}</div>
                                            </Card>
                                        </Col>

                                    ))}



                                    {/* {data.languages.map(language => (
                                        <Col sm={6} md={6} lg={3} key={language}>
                                            <Card key={language} bg={language.bg}
                                                onClick={() => navigate(`/`)}
                                                className={language.name === "German" || language.name === "Secret" ? cardClass1 : cardClass2}
                                            >

                                                <Card.Body className={language.isActive ? "notDisabledCard" : "disabledCard"}>
                                                    <Card.Title> <span className="nowrap">{language.name}</span></Card.Title>
                                                    <Card.Text className="mb-1">
                                                        {language.name === "Secret" ?
                                                            <img style={{ height: "4em", color: "#007BFF" }} src={language.source} alt={language.name} />
                                                            :
                                                            <img className="flagImage" src={`images/flags/${language.flag}.svg`} alt={language.name} />
                                                        }
                                                    </Card.Text>
                                                    <div>{language.totalWords} words</div>

                                                </Card.Body>

                                            </Card>
                                        </Col>
                                    ))} */}

                                </CardDeck>

                                <div className="mt-3">
                                    <button onClick={goToAddLanguagePage} className="btn btn-primary">+ add</button>
                                </div>

                            </div>
                        }

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';
import API from '../../utils/API';
import LoadingCard from '../../components/LoadingCard/LoadingCard';
import { cardClass1, cardClass2 } from '../../styles/style';

export default function UserHome() {

    const navigate = useNavigate();

    const [data, setData] = useState(null);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        setIsLoadingData(true);

        API.getUsersHomepageData()
            .then(res => {
                console.log(res)

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


    return (
        <div>UserHome



            <Container>
                <Row>
                    <Col>

                        {isLoadingData && <LoadingCard />}
                        {error && <div className="bg-danger text-white">Error</div>}

                        {!isLoadingData && isLoaded && !error && data &&
                            <div>
                                <p>data is loaded ✔</p>

                                <p>Data is: </p>

                                <CardDeck id="homeLanguagesCardDeck">

                                    {data.languages.map(language => (
                                        <Col sm={6} md={6} lg={3} key={language}>
                                            <Card key={language} bg={"primary"}
                                                onClick={() => navigate(`/`)}
                                                className={language.name === "German" || language.name === "Secret" ? cardClass1 : cardClass2}
                                            >

                                                <Card.Body className={language.isActive ? "notDisabledCard" : "disabledCard"}>
                                                    <Card.Title> <span className="nowrap">{language.name}</span></Card.Title>
                                                    <Card.Text className="mb-1">
                                                        {language.name === "Secret" ?
                                                            <img style={{ height: "4em", color: "#007BFF" }} src={language.source} alt={language.language} />
                                                            :
                                                            <img className="flagImage" src={language.source} alt={language.language} />
                                                        }
                                                    </Card.Text>
                                                    <div>{language.totalWords} words</div>

                                                </Card.Body>

                                            </Card>
                                        </Col>
                                    ))}

                                </CardDeck>

                            </div>
                        }

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

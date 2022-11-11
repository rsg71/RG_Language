import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import API from '../../utils/API';
import LoadingCard from '../../components/LoadingCard/LoadingCard';
import { CurrentUserContext } from '../../App';
import LanguageCard from '../../components/LanguageCard/LanguageCard';

export default function UserHome() {

    let currentUser: any = useContext(CurrentUserContext);

    const navigate = useNavigate();

    const [data, setData] = useState<any>(null);
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
                console.log("userHome retrieve all languages for this user err: ", err);
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
                            <div className="animate__animated animate__fadeIn">
                                <p className="lead">Your languages: </p>

                                {data.length === 0 &&
                                    <>
                                        <div className="bg-light text-muted p-3">
                                            No languages added yet
                                        </div>
                                    </>
                                }

                                <CardDeck id="homeLanguagesCardDeck">


                                    {data.map((language: any) => (
                                        <Col sm={6} md={6} lg={3} key={language.language}>
                                            <LanguageCard
                                                isClickable={true}
                                                language={language}
                                            />
                                        </Col>
                                    ))}

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

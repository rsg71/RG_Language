import React, { useEffect, useState, useContext } from 'react';
import { Row, Col, Breadcrumb } from 'react-bootstrap';
import { CurrentUserContext } from '../../App';
import LoadingCard from '../../components/LoadingCard/LoadingCard';
import PageContainer from '../../components/PageContainer/PageContainer';
import API from '../../utils/API';
import { Link, useNavigate } from 'react-router-dom';

export default function AddLanguage() {

    let navigate = useNavigate();
    let currentUser = useContext(CurrentUserContext);

    const [languagesForThisUser, setLanguagesForThisUser] = useState([]);

    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);


    const handlefindAllLanguagesForThisUser = () => {

        if (currentUser) {

            API.findAllLanguagesForThisUser(currentUser._id)
                .then(res => {
                    console.log(res);
                    setLanguagesForThisUser(res.data);
                    setIsLoaded(true);
                    setIsLoading(false);
                    setError(false);
                })
                .catch(err => {
                    console.log(err);
                    setError(true);
                    setIsLoaded(true);
                    setIsLoading(false);
                })
        }
    }

    useEffect(() => {
        if (currentUser) {
            setIsLoading(true);
            handlefindAllLanguagesForThisUser(currentUser._id);
        }
    }, [])

    const handleAddLanguage = (languageChosen) => {

        if (currentUser) {

            setIsLoading(true);

            API.addLanguage(languageChosen)
                .then(res => {
                    console.log(res);
                    handlefindAllLanguagesForThisUser(currentUser._id);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    let languages = [
        {
            name: "French"
        },
        {
            name: "Spanish"
        },
        {
            name: "Italian"
        },
        {
            name: "Portuguese"
        },
        {
            name: "German"
        },

    ]


    const isLanguageAlreadyBeingLearned = (languageName) => {
        let isBeingLearned = languagesForThisUser.some(language => language.language === languageName.toLowerCase());
        console.log(languageName, "isBeingLearned: ", isBeingLearned)
        return isBeingLearned;
    }

    return (
        <div>
            <PageContainer>

                <Breadcrumb bg="white">
                    <Breadcrumb.Item as={Link} to="/user-home" onClick={() => navigate("/user-home")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Add language
                    </Breadcrumb.Item>
                </Breadcrumb>

                <h1>Add a language</h1>

                <div className="mt-2">
                    <Row>
                        <Col lg={6}>

                            {error && <p>Error!</p>}

                            {isLoading && <LoadingCard />}

                            {!error && !isLoading && isLoaded &&
                                <>
                                    {/* <div>
                                        <pre>{JSON.stringify(languagesForThisUser, null, 4)}</pre>
                                    </div> */}
                                    {languages.map(language => (
                                        <div className="mt-2 bg-light text-dark rounded p-2">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    {language.name} {isLanguageAlreadyBeingLearned(language.name) && "✔"}
                                                </div>
                                                {!isLanguageAlreadyBeingLearned(language.name) &&
                                                    <button className="btn btn-primary" onClick={() => handleAddLanguage(language.name)}>Add</button>
                                                }
                                            </div>
                                        </div>
                                    ))}

                                </>
                            }

                        </Col>
                    </Row>
                </div>

            </PageContainer>
        </div>
    )
}

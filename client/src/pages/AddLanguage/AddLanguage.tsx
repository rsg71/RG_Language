import React, { useEffect, useState, useContext } from 'react';
import { Row, Col, Breadcrumb } from 'react-bootstrap';
import { CurrentUserContext } from '../../App';
import LoadingCard from '../../components/LoadingCard/LoadingCard';
import PageContainer from '../../components/PageContainer/PageContainer';
import API from '../../utils/API';
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUserInterface } from '../../utils/interfaces';

export default function AddLanguage() {

    let navigate = useNavigate();
    let currentUser: CurrentUserInterface = useContext(CurrentUserContext);
    console.log("currentUser, check this out: ", currentUser);

    const [languagesForThisUser, setLanguagesForThisUser] = useState<any>([]);

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
            handlefindAllLanguagesForThisUser();
        }
    }, [])

    const handleAddLanguage = (languageChosen: any) => {

        if (currentUser) {

            setIsLoading(true);

            API.addLanguage(languageChosen)
                .then(res => {
                    console.log(res);
                    handlefindAllLanguagesForThisUser();
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }


    let languages = [
        {
            name: "French",
            words: 100
        },
        {
            name: "Spanish",
            words: 245
        },
        {
            name: "Italian",
            words: 1000
        },
        {
            name: "Portuguese",
            words: 100
        },
        {
            name: "German",
            words: 100
        },

    ]


    const isLanguageAlreadyBeingLearned = (languageName: string) => {
        let isBeingLearned = languagesForThisUser.some((language: any) => language.language === languageName.toLowerCase());
        console.log(languageName, "isBeingLearned: ", isBeingLearned)
        return isBeingLearned;
    }

    return (
        <div>
            <PageContainer>

                <Breadcrumb className="bg-white">
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
                                            <div className="text-muted">
                                            {`total words: ${language.words}`}
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

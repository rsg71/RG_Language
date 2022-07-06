import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import LoadingCard from '../../components/LoadingCard/LoadingCard';
import PageContainer from '../../components/PageContainer/PageContainer';
import API from '../../utils/API';

export default function AddLanguage() {

    const [languagesForThisUser, setLanguagesForThisUser] = useState([]);

    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);


    const handleGetAllLanguagesForUser = () => {

        API.getAllLanguagesForUser()
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

    useEffect(() => {
        setIsLoading(true);
        handleGetAllLanguagesForUser();
    }, [])

    const handleAddLanguage = (languageChosen) => {

        setIsLoading(true);

        API.addLanguage(languageChosen)
            .then(res => {
                console.log(res);
                handleGetAllLanguagesForUser();
            })
            .catch(err => {
                console.log(err);
            })
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
                                                    <button className="btn btn-primary" onClick={() => handleAddLanguage(language.name)}>Select</button>
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

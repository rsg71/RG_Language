import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import BackButton from '../../../components/BackButton/BackButton';
import SecretLanguage from "../../../data/secretlanguage.json";

export default function SecretTranslator() {

    let history = useHistory();

    function handleClick() {
        history.push("/secret");
    }

    const [wordState, setWordState] = useState([]);
    const [wordsList, setWordsList] = useState();
    const [error, setError] = useState();


    function handleWordsInput(e) {
        const { value } = e.target;

        let words = value.split(" ");
        console.log(words);
        setWordsList(words);
    }

    console.log(wordsList);

    function handleSubmit() {

        wordsList.forEach(word => {
            let idx = SecretLanguage.findIndex(obj => obj.foreign === word);

            if (!SecretLanguage) {
                setError("error, no results found");
                return;
            } else if (SecretLanguage[idx].foreign === word) {
                wordState.push(SecretLanguage[idx].english)
                setWordState([...wordState]);
            }

        })

        // let index = SecretLanguage.findIndex(item => item.foreign === value)
        // if (SecretLanguage[index]) {
        //     setWordState(SecretLanguage[index].english);
        // }
    }



    return (
        <>
            <h1 className="mt-4">Translate secret language</h1>

            <BackButton handleClick={handleClick} />
            <Row>
                <Col md={6}>
                    <h5>Secret Language:</h5>
                    <textarea className="form-control" rows={5} placeholder="Translate" onChange={e => handleWordsInput(e)} />
                    <button onClick={() => handleSubmit()}>translate</button>
                </Col>

                <Col md={6}>
                    <h5>English:</h5>
                    <textarea className="form-control" rows={5} placeholder="Translate"/>
                </Col>
            </Row>


            <h5> 
                {   error ? error :
                    wordState.toString()
                }
            </h5>

        </>
    )
}

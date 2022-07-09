import React, { useEffect, useState, useRef } from 'react';
import API from '../../utils/API';
import { Row, Col } from 'react-bootstrap'


export default function ItalianAddWords() {

    const [allWords, setAllWords] = useState([]);

    const inputRef = useRef(null);


    const [newWord, setNewWord] = useState({
        word: "",
        translation: "",
        answeredCorrectly: false
    });

    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const [loading, setLoading] = useState(false);
    const [added, setAdded] = useState(false);

    // const [searchText, setSearchText] = useState("");


    const getAllWords = async () => {
        let words = await API.getAllItalianWords();
        return words;
    }

    useEffect(() => {

        getAllWords()
            .then(res => {
                setAllWords(res.data);
                setLoaded(true);
                setError(false);
            })
            .catch(err => {
                console.log(err);
                setLoaded(true);
                setError(true);
            });
    }, []);


    function handleNewWordInput(word) {
        setNewWord({ ...newWord, word })
    }


    function handleTranslationInput(translation) {
        setNewWord({ ...newWord, translation })
    }

    function addWord() {
        if (!newWord.word || !newWord.translation) return null;


        let exists = searchWordBank();
        console.log("exists? : ", exists);

        if (exists) {
            alert("word already exists in your list!");
            clearInputs();
            inputRef.current.focus();
            return
        }

        setLoading(true);
        API.addItalianWord(newWord)
            .then(res => {
                console.log(res);
                setLoading(false);
                clearInputs();
                setAdded(false);
                inputRef.current.focus();

                getAllWords()
                .then(res => {
                    setAllWords(res.data);
                })
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                setAdded(false);
            })
    }



    function clearInputs() {
        setNewWord({
            word: "",
            translation: "",
            answeredCorrectly: false
        })
    }

    function addAnotherWord() {
        clearInputs();
        setAdded(false);

    }



    function searchWordBank() {
        let alreadyExists = allWords.filter(word => word.word === newWord.word);
        console.log("already exists: ", alreadyExists);

        console.log("alreadyExists.length: ", alreadyExists.length > 0)
        return alreadyExists.length > 0;
    }


    return (
        <>
            {error && <div>Error</div>}

            {!error && loaded && <>
                <div>
                    <h1>Add a word</h1>

                    {/* {JSON.stringify(allWords, null, 4)} */}

                    {/* <button onClick={searchWordBank}>search word bank</button> */}

                    {/* {JSON.stringify(newWord, null, 4)} */}

                    <Row>
                        <Col>
                            <h6>Current words:</h6>
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Italian</th>
                                        <th>English</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allWords.map((word, index) => (
                                        <tr key={word._id}>
                                            <td>{index + 1}</td>
                                            <td>{word.word}</td>
                                            <td>{word.translation}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6} xl={4}>
                            <label> Italian:</label>
                            <input ref={inputRef} className="form-control" value={newWord.word} onChange={e => handleNewWordInput(e.target.value)} disabled={loading} autoFocus />
                        </Col>
                    </Row>



                    <Row>
                        <Col lg={6} xl={4}>
                            <label> English:</label>
                            <input className="form-control" value={newWord.translation} onChange={e => handleTranslationInput(e.target.value)} disabled={loading} />
                        </Col>
                    </Row>


                    {added &&
                        <div>
                            <Row>
                                <Col lg={6} xl={4}>
                                    <p className="bg-light-green text-success pl-1">word added successfully <i className="bi bi-check" /></p>

                                </Col>
                            </Row>
                            <button className="btn btn-secondary" onClick={addAnotherWord}>Add another word</button>
                        </div>
                    }

                    {!added &&
                        <button onClick={addWord} className="btn btn-primary mt-2" disabled={!newWord.word || !newWord.translation}>
                            {loading ? "Adding..." : "Add word"}
                        </button>
                    }

                </div>
            </>}

        </>
    )
}
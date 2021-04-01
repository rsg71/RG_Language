import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import allSecretWords from "../../data/secretlanguage.json"
import { useHistory } from "react-router-dom";

export default function SecretLanguageAllWords() {

    let history = useHistory();

    function handleClick() {
        history.push("/secret");
        console.log("history" + history)
    }


    return (
        <>


            <Container>
                <div className="mt-4">
                <Button type="button" onClick={handleClick}>
                        <i className="fas fa-arrow-circle-left"></i> Back
                </Button>
                    <h1 className="mt-4">All secret language words</h1>

                </div>
                <Row>
                    <Col md={7} lg={7}>
                        <table className="table table-sm table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">English</th>
                                    <th scope="col">Secret</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allSecretWords.map((item, idx) => (
                                    <tr key={idx}>
                                        <th scope="row">{idx + 1}</th>
                                        <td>{item.english}</td>
                                        <td>{item.foreign}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {Link} from "react-router-dom"
import API from "../../utils/API"
import Progress from '../../components/Progress/Progress'

export default function Spanish() {

    const [totalSpanishWords, setTotalSpanishWords] = useState()

    useEffect(() => {
        loadWords()
    }, [])

    function loadWords() {
        API.getAllSpanishWords()
        .then(res => {
            console.log("total length of spanish words: ", res.data.length);
            console.log(res)
            setTotalSpanishWords(res.data.length)
        })
        .catch(err => console.log(err))
    }


    return (
        <>
            <Container>

                <Row>
                    <Col>
                        <h1>Spanish home</h1>
                        <Progress />
                        <h2 style={{float: "right"}}>{totalSpanishWords}</h2>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        Continue learning:

                        <Link to="/quiz"><Button variant="primary">Practice vocab</Button></Link>
                    </Col>
                </Row>

            </Container>

        </>
    )
}

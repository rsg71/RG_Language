import React, {useState} from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion'
import Data from "../../data/data.json"

export default function Quiz() {



    const [question, setQuestion] = useState()

    const[startedQuiz, setStartedQuiz] = useState(false)


    const data = Data[0]

    return (

        
        <div>
            <Container>
                <Row>
                    <Col>
                        <Button><i className="fas fa-arrow-circle-left"></i> Back</Button>

                        <QuizQuestion data={data}/>
                       
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

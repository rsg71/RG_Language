import React, { useContext, useState, useEffect } from 'react'
import { CurrentUserContext } from '../../App';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../../utils/API';
import { Container, Row, Col } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../../utils/helperFunctions';

export default function GenericHomepage() {
    let { languageName } = useParams();
    let navigate = useNavigate();

    let currentUser = useContext(CurrentUserContext)

    const [data, setData] = useState([]);

    const loadData = () => {

        API.getLanguageDataForUser(currentUser._id, languageName)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        if (currentUser !== null) {
            console.log("currentUser: ", currentUser);
            loadData();
        }
    }, [currentUser]);



    return (
        <div>
            <Container>
                <Row>
                    <Col>

                        <Row className="mb-3">
                            <Col>
                                <h1>{capitalizeFirstLetter(languageName)} Home</h1>
                                <div>
                                    <p>language: {languageName}</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <button className="btn btn-primary" onClick={() => navigate(`/${languageName}-quiz`)}>Learn new words</button>
                            </Col>
                            <Col>
                                <button className="btn btn-primary">Review words</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

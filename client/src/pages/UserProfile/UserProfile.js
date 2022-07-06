import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import API from '../../utils/API';
import { useNavigate } from 'react-router-dom';


export default function UserProfile({ setCurrentUser }) {

    const navigate = useNavigate();

    const handleLogout = () => {
        API.logout()
            .then(res => {
                console.log(res);
                setCurrentUser(null);
                navigate("/")
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>User Profile</h1>

                        <button onClick={handleLogout}>Logout</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

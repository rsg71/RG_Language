import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import API from '../../utils/API';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../App';

interface Props {
    setCurrentUser: (user: any) => void;
}

export default function UserProfile({ setCurrentUser }: Props) {

    let currentUser: any = useContext(CurrentUserContext);

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

                        <h2>Name: {currentUser && currentUser.username}</h2>

                        <button onClick={handleLogout}>Logout</button>

                        {/* <Row>
                            <Col>
                                <h2>Username: </h2>
                            </Col>
                        </Row> */}

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

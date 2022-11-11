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
                <Row className="mb-4">
                    <Col>
                        <div className="card shadow-sm p-3 text-center bg-light-blue">
                            <h1>User Profile</h1>
                            <h2 className="text-center lead">Name: {currentUser && currentUser.username}</h2>

                            <div style={{ visibility: "hidden" }}>A</div>
                            <div style={{ visibility: "hidden" }}>A</div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="card text-left shadow-sm p-3 bg-light">
                            <div>
                                <button onClick={handleLogout} className="btn btn-primary">Logout</button>
                            </div>

                            <div style={{ visibility: "hidden" }}>A</div>
                            <div style={{ visibility: "hidden" }}>A</div>
                            <div style={{ visibility: "hidden" }}>A</div>
                            <div style={{ visibility: "hidden" }}>A</div>
                            <div style={{ visibility: "hidden" }}>A</div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

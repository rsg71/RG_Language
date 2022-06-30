import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import API from '../../utils/API';
import { useNavigate } from 'react-router-dom';

export default function Login({ handleSetUser }) {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        let { name, value } = e;
        setFormData({ ...formData, [name]: value })
    }

    const handleLogin = () => {
        API.login(formData)
            .then(res => {
                console.log(res);
                let userData = res.data;
                handleSetUser(userData);

                navigate("/user-home")
            })
            .catch(err => {
                console.log(err);
            })
    }

    const getUser = () => {
        API.getUser()
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }


    const logout = () => {
        API.logout()
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg={6}>
                        <h1>Login</h1>
                        <button onClick={getUser}>getUser</button>
                        <button onClick={logout}>logout</button>

                        <pre>{JSON.stringify(formData, null, 4)}</pre>

                        <label>Username</label>
                        <input name="username" value={formData.username} className="form-control" onChange={e => handleChange(e.target)} />

                        <label>Password</label>
                        <input name="password" value={formData.password} className="form-control" onChange={e => handleChange(e.target)} type="password" />


                        <div className="mt-2">
                            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

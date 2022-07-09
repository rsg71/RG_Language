import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import API from '../../utils/API';
import { useNavigate } from 'react-router-dom';

export default function Login({ handleSetUser }) {

    let env = process.env.NODE_ENV;

    let isDevelopmentEnv = env === 'development';

    const navigate = useNavigate();

    const [isError, setIsError] = useState(false);

    const [showPassword, setShowPassword] = useState(false);


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
                console.log("user: ", res);
                let userData = res.data;
                handleSetUser(userData);

                navigate("/user-home")
            })
            .catch(err => {
                console.log(err);
                setIsError(true);
            })
    }


    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            mockLogin();
        }
    }, [])



    const mockLogin = () => {
        let formData = {
            username: 'rg',
            password: '123'
        }
        API.login(formData)
            .then(res => {
                console.log("login res: ", res);
                let userData = res.data;
                handleSetUser(userData);

                navigate("/user-home")
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg={6}>
                        <h1>Login</h1>

                        {isDevelopmentEnv &&
                            <div>
                                <button onClick={mockLogin} className="btn btn-info">mockLogin</button>
                            </div>
                        }

                        {/* <pre>{JSON.stringify(formData, null, 4)}</pre> */}

                        <label>Username</label>
                        <input name="username" value={formData.username} className="form-control" onChange={e => handleChange(e.target)} />

                        <label>Password: </label>
                        <input name="password" value={formData.password} className="form-control d-inline" onChange={e => handleChange(e.target)} type={showPassword ? "text" : "password"} />
                        <span style={{ marginLeft: "-30px", cursor: "pointer" }} onClick={() => setShowPassword(!showPassword)} className="grey font-lg">
                            <i className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"} />
                        </span>

                        {isError &&
                            <div className="text-danger">
                                Incorrect username or password
                            </div>
                        }

                        <div className="mt-2">
                            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

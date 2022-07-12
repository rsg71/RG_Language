import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import API from '../../utils/API';
import { useNavigate, Link } from 'react-router-dom';
import LoadingCard from '../../components/LoadingCard/LoadingCard';

export default function Login({ handleSetUser, setLoading, setLoaded, setError, loading }) {

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
        setLoading(true);
        API.login(formData)
            .then(res => {
                console.log("user: ", res);
                let userData = res.data;
                handleSetUser(userData);

                setLoading(false);
                setLoaded(true);
                setError(false);

                navigate("/user-home")
            })
            .catch(err => {

                console.log(err);
                setIsError(true);


                setLoading(false);
                setLoaded(true);
                setError(true);
            })
    }


    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            // mockLogin();
        }
    }, [])



    const mockLogin = () => {
        let formData = {
            username: 'rg',
            password: '123'
        }

        setLoading(true);


        API.login(formData)
            .then(res => {
                console.log("login res: ", res);
                let userData = res.data;
                handleSetUser(userData);

                setLoading(false);
                setLoaded(true);
                setError(false);

                navigate("/user-home")
            })
            .catch(err => {
                console.log(err);

                setLoading(false);
                setLoaded(true);
                setError(true);
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

                        {loading && <LoadingCard />}

                        {!loading &&
                            <>

                                <label>Username</label>
                                <input name="username" value={formData.username} className="form-control" onChange={e => handleChange(e.target)} />

                                <label>Password: </label>
                                <input name="password" value={formData.password} className="form-control d-inline" onChange={e => handleChange(e.target)} type={showPassword ? "text" : "password"} />
                                <span style={{ marginLeft: "-30px", cursor: "pointer" }} onClick={() => setShowPassword(!showPassword)} className="grey font-lg">
                                    <i className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"} />
                                </span>
                            </>
                        }

                        {isError &&
                            <div className="text-danger">
                                Incorrect username or password
                            </div>
                        }

                        <div className="mt-2">
                            <button className="btn btn-primary" onClick={handleLogin} disabled={loading}>Login</button>
                        </div>

                        <div className="mt-2">
                            Don't have a login? <Link to="/signup">Sign up here</Link>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

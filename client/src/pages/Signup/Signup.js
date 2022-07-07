import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import API from '../../utils/API';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoadingCard from '../../components/LoadingCard/LoadingCard';

export default function Signup() {

    // const navigate = useNavigate();

    const [signupSuccessful, setSignupSuccessful] = useState(false);
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [invalidPass, setInvalidPass] = useState(false);
    const [invalidFields, setInvalidFields] = useState(false);


    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    })


    const handleInputChange = (e) => {
        let { name, value } = e;
        setFormData({ ...formData, [name]: value })
    }

    const handleSignUp = () => {

        if (formData.password !== formData.confirmPassword) {
            setInvalidPass(true);
            return
        }

        if (!formData.username || !formData.password || !formData.confirmPassword) {
            setInvalidFields(true);
            return
        } else {
            setInvalidFields(false);
        }

        setIsSigningUp(true);

        let relevantData = {
            username: formData.username,
            password: formData.password
        }
        API.signup(relevantData)
            .then(res => {
                console.log(res);
                setIsSigningUp(false);
                setSignupSuccessful(true);
                setError(false);
            })
            .catch(err => {
                console.log(err);
                setIsSigningUp(false);
                setSignupSuccessful(false);
                setError(true);
            })
    }


    return (
        <div>

            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg={6}>
                        <h1>Sign up</h1>


                        {/* <pre>{JSON.stringify(formData, null, 4)}</pre> */}

                        {error && <div className="mt-2 bg-light-red p-2">Error</div>}

                        {isSigningUp && <LoadingCard />}

                        {!signupSuccessful && !isSigningUp &&
                            <>
                                <div>
                                    <label>Username</label>
                                    <input name="username" value={formData.username} className="form-control" onChange={e => handleInputChange(e.target)} />
                                </div>

                                <div className="">
                                    <label>Password</label>
                                    <input name="password" value={formData.password} className="form-control d-inline" onChange={e => handleInputChange(e.target)} type={showPassword ? "text" : "password"} />
                                    <span style={{ marginLeft: "-30px", cursor: "pointer" }} onClick={() => setShowPassword(!showPassword)} className="grey font-lg">
                                        <i className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"} />
                                    </span>
                                </div>

                                <div className="">
                                    <label>Confirm Password</label>
                                    <input name="confirmPassword" value={formData.confirmPassword} className="form-control d-inline" onChange={e => handleInputChange(e.target)} type={showConfirmPassword ? "text" : "password"} />
                                    <span style={{ marginLeft: "-30px", cursor: "pointer" }} onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="grey font-lg">
                                        <i className={showConfirmPassword ? "bi bi-eye" : "bi bi-eye-slash"} />
                                    </span>
                                </div>

                                {invalidPass &&
                                    <div className="text-danger">
                                        Passwords do not match
                                    </div>
                                }

                                {invalidFields &&
                                    <div className="text-danger">
                                        Please fill out all fields
                                    </div>
                                }



                                <div className="mt-2">
                                    <button className="btn btn-primary" onClick={handleSignUp}>Sign up</button>
                                </div>
                            </>
                        }



                        {signupSuccessful && !isSigningUp && !error &&
                            <div className="mt-4">
                                ✔ Signup Successful. <Link to="/login">Click here to login</Link>
                            </div>
                        }

                    </Col>
                </Row>


            </Container>
        </div>
    )
}

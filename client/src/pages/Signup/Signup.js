import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import API from '../../utils/API';

export default function Signup() {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (e) => {
        let { name, value } = e;
        setFormData({ ...formData, [name]: value })
    }

    const handleSignUp = () => {
        API.signup(formData)
        .then(res => {
            console.log(res)
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
                        <h1>Sign up</h1>


                        <pre>{JSON.stringify(formData, null, 4)}</pre>

                        <div>
                            <label>Username</label>
                            <input name="username" value={formData.username} className="form-control" onChange={e => handleInputChange(e.target)} />
                        </div>

                        <div className="">
                            <label>Password</label>
                            <input name="password" value={formData.password} className="form-control" onChange={e => handleInputChange(e.target)} type="password" />
                        </div>


                        <div className="mt-2">
                            <button className="btn btn-primary" onClick={handleSignUp}>Sign up</button>
                        </div>
                    </Col>
                </Row>


            </Container>
        </div>
    )
}

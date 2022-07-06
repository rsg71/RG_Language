import React from 'react'
import { Row, Col } from 'react-bootstrap'
import PageContainer from '../../components/PageContainer/PageContainer'

export default function AddLanguage() {

    let languages = [
        {
            name: "French"
        },
        {
            name: "Spanish"
        },
        {
            name: "Italian"
        },
        {
            name: "Portuguese"
        },
        {
            name: "German"
        },

    ]
    return (
        <div>
            <PageContainer>
                <h1>Add a language</h1>

                <div className="mt-2">
                    <Row>
                        <Col lg={6}>
                            {languages.map(language => (
                                <div className="mt-2 bg-info text-white rounded p-2">
                                    <div className="d-flex justify-content-between">
                                        <div>{language.name}</div>
                                        <button className="btn btn-light">Select</button>
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </div>

            </PageContainer>
        </div>
    )
}

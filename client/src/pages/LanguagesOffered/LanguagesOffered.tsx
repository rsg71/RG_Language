import React from 'react'
import { CardDeck, Col, Row, Container } from 'react-bootstrap'
import LanguageCard from 'components/LanguageCard/LanguageCard';
import languages from 'data/languages.json'


export default function LanguagesOffered() {

    return (
        <div>


            <Container>
                <Row>
                    <Col>

                        <h1>Languages Offered:</h1>

                        <CardDeck id="homeLanguagesCardDeck">
                            <>
                                {languages.map((language: any) => (
                                    <Col sm={6} md={6} lg={3} key={language.language}>
                                        <LanguageCard
                                            language={language}
                                        />
                                    </Col>
                                ))}
                            </>
                        </CardDeck>



                    </Col>

                </Row>

            </Container>

        </div>
    )
}
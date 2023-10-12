import React from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { cardClass1, cardClass2 } from 'styles/style';
import { capitalizeFirstLetter, determineBgColor, determineFlag } from 'utils/helperFunctions';

interface Props {
    language: any;
    isClickable?: boolean;
}

export default function LanguageCard({ language, isClickable }: Props) {

    const navigate = useNavigate();

    const languageName = language.language ? language.language : "";
    const languageNameLowerCase = languageName.toLowerCase();
    const backgroundColor = determineBgColor(languageNameLowerCase);
    const cardClass = languageName === "german" || languageName === "Secret" ? cardClass1 : cardClass2;
    const numWords = language.wordsLearned && language.wordsLearned.length;
    const bodyClass = language.isActive ? "notDisabledCard" : "disabledCard";
    const cardTitle = capitalizeFirstLetter(languageName);


    const texts_that_should_be_dark = ['German'];
    const textClass = texts_that_should_be_dark.includes(languageName) ? "text-dark" : "text-white";

    const FlagSection = () => {

        if (languageName === "Secret") {
            return (
                <img style={{ height: "4em", color: "#007BFF" }} src={language.source} alt={language} />
            )
        }
        else {
            return (
                <img className="flagImage" src={`images/flags/${determineFlag(languageNameLowerCase)}.svg`} alt={languageName} />

            )
        }
    }




    return (
        <Card
            bg={backgroundColor}
            onClick={() => {
                isClickable ?
                    navigate(`/generic/${languageName}`)
                    : null
            }}
            className={cardClass}
        >
            <Card.Body className={`${bodyClass} ${textClass}`}>
                <Card.Title>
                    <span className="nowrap">{cardTitle}</span>
                </Card.Title>
                <Card.Text className="mb-1">
                    <FlagSection />
                </Card.Text>
                <div>
                    {numWords} words
                </div>

            </Card.Body>

        </Card>
    )
}
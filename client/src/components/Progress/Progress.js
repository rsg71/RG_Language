import React from 'react'
import ProgressBar from "react-bootstrap/ProgressBar"

export default function Progress() {

    const now = 30;

    return (
        <>
            <ProgressBar now={now} label={`${now}%`} />
        </>
    )
}

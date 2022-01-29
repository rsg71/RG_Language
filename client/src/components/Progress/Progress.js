import React from 'react'
import ProgressBar from "react-bootstrap/ProgressBar"

export default function Progress({percent}) {

    return (
        <>
            <ProgressBar now={percent} label={`${percent}%`} />
        </>
    )
}

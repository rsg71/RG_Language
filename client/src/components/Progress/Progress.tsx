import React from 'react'
import ProgressBar from "react-bootstrap/ProgressBar"

interface Props {
    percent: number;
}

export default function Progress({percent}: Props) {

    return (
        <>
            <ProgressBar now={percent} label={`${percent}%`} />
        </>
    )
}

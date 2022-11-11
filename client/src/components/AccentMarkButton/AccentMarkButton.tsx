import React from 'react'

interface Props {
    letter: string;
    onClick: (letter: string) => void;
}

export default function AccentMarkButton({ letter, onClick }: Props) {
    return (
        <button onClick={e => onClick(letter)} className="card d-inline-block btn shadow-sm">{letter}</button>

    )
}
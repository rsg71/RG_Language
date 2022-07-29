import React from 'react'

interface Props {
    className: string;
    wording: string;
}

export default function Alert({ className, wording }: Props) {


    return (
        <div className={className}>
            {wording}
        </div>
    )
}

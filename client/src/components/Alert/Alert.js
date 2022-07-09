import React from 'react'

export default function Alert({ className, wording }) {


    return (
        <div className={className}>
            {wording}
        </div>
    )
}

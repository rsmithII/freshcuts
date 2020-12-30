import React from 'react'

export default function DealCard({deal}) {
    const {name, description, price} = deal
    return (
        <div className="deal-card">
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}

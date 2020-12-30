import React from 'react'

import DealCard from '../Cards/DealCard';

export default function Deals({deals, addService}) {

    const showDeals = () => {
        return deals.map(deal => {
            return <DealCard key={deal.id} deal={deal} addService={addService}/>
        })
    }

    return (
        <div className="special-offer" >
            <h3>🌟Special Offer!🌟</h3>
            {showDeals()}
        </div>
    )
}

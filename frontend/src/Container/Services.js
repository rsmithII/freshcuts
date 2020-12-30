import React from 'react'

import ServiceCard from '../Cards/ServiceCard';

export default function Services({services, addService}) {

    const showServices = () => {
        return services.map(service => {
            return <ServiceCard key={service.id} service={service} addService={addService}/>
        })
    }

    return (
        <div>
            {showServices()}
        </div>
    )
}

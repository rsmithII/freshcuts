import React from 'react'

export default function ServiceCard({service}) {
    const {task} = service

    // const handleClick =() => {
    //     if(addFavorite){
    //         addFavorite(services)
    //     } else {
    //         removeFavorite(services)
    //     }
    // }

    return (
        <div className="service-card">
            <h3 className="mowing">{task}</h3>
            <img className="mowing-image" src="https://img.huffingtonpost.com/asset/5cd362652100005800d38656.jpeg?ops=1200_630" alt="logo"/>
        </div>
    )
}

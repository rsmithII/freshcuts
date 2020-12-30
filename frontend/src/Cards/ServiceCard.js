import React from 'react'

export default function ServiceCard({service}) {
    const {task, description, price} = service

    // const handleClick =() => {
    //     if(addFavorite){
    //         addFavorite(services)
    //     } else {
    //         removeFavorite(services)
    //     }
    // }

    return (
        <div className="service-card">
            <label for="task">{task}</label>
            <input className="service-checkbox" id={task} type="checkbox"/>
                <p>{description}</p>
                <p>${price}</p>
        </div>
    )
}

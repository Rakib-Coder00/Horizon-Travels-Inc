import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const{ name, img, description, price}= service
    return (
        <div>
            <div className='service-container mt-3'>
            <img src={img} alt="img" />
            <h3>This is Service {name}</h3>
            <p>Budget : $ {price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Book Now</button>
        </div>
        </div>
    );
};

export default Service;
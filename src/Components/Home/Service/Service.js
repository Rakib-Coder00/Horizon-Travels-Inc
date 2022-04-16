import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const{ name, img, trip, price}= service
    return (
        <div className='services'>
            <div className='service-container mt-3'>
            <img src={img} alt="img" />
            <p>Trip -  {trip}</p>
            <p>Budget : $ {price}</p>
            <h3>This is Service {name}</h3>
            {/* <p><small>{description}</small></p> */}
            <button className='btn btn-primary'>Book Now</button>
        </div>
        </div>
    );
};

export default Service;
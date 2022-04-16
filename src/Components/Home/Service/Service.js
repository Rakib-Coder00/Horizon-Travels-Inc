import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const{ name, img, description, price}= service
    return (
        <div>
            <div className='service-container mt-5'>
            <img src={img} alt="img" />
            <h3>This is Service {name}</h3>
            <p>Price : {price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Book</button>
        </div>
        </div>
    );
};

export default Service;
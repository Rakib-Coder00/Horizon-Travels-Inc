import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{ id, name, img, trip, price, description}= service
    const navigate = useNavigate()
    const serviceDetails = (id)=>{
        // navigate(`/service/${id}`)
        navigate('/checkout')
    }
    return (
        <div className='services'>
            <div className='service-container mt-3'>
            <img src={img} alt="img" />
            <h6 >{name}</h6>
            <small className="text-plan text-start">Budget: ${price}</small>
            <p >Trip- <span className='text-plan'>{trip}</span> </p>
            <p><small>{description}</small></p>
            <button onClick={()=>serviceDetails(id)}  className='btn btn-primary'>Book Now</button>
        </div>
        </div>
    );
};

export default Service;
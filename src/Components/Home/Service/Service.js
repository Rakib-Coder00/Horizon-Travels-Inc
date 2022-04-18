import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{ id, name, img, trip, price}= service
    const navigate = useNavigate()
    const serviceDetails = (id)=>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='services'>
            <div className='service-container mt-3'>
            <img src={img} alt="img" />
            <p>Trip -  {trip}</p>
            <p>Budget : $ {price}</p>
            <h3>This is Service {name}</h3>
            {/* <p><small>{description}</small></p> */}
            <button onClick={()=>serviceDetails(id)}  className='btn btn-primary'>Book Now</button>
        </div>
        </div>
    );
};

export default Service;
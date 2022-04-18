import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h6>This service details : {serviceId}</h6>
        </div>
    );
};

export default ServiceDetails;
import React from 'react';
import { useParams } from 'react-router-dom';

const ServicesDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome To Detail {serviceId}</h2>
        </div>
    );
};

export default ServicesDetail;
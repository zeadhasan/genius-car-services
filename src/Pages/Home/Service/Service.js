import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    const navigate = useNavigate();
    const navigateToServicesDetail = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt='' />
            <h2>This is service: {name}</h2>
            <p>{price}</p>
            <p>{description}</p>
            <button onClick={() => navigateToServicesDetail(id)} className='service-button btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;
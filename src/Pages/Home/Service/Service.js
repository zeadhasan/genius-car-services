import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt='' />
            <h2>This is service: {name}</h2>
            <p>{price}</p>
            <p>{description}</p>
            <button className='service-button btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;
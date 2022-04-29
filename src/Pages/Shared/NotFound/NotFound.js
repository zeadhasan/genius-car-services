import React from 'react';
import notfound from '../../../images/notfound.jpg';

const NotFound = () => {
    return (
        <div className='container text-center'>
            <h2 className='text-primary mb-4 mt-5'>This Page Is Not Found</h2>
            <img className='w-100' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;
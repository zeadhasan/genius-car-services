import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form'>
            <h2 className='register-text'>PLEASE REGISTER</h2>
            <form onSubmit={handleRegister}>
                <input type="text" id="" name="name" placeholder="Your Name" required />
                <input type="email" id="" name="email" placeholder="Email Address" required />
                <input type="password" id="" name="password" placeholder="password" required />
                <input type="submit" value="Register" />
            </form>
            <p className='mt-4'>Already Have An Account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Login Here</Link> </p>
        </div>
    );
};

export default Register;
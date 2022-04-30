import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checkbox;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div className='register-form'>
            <h2 className='register-text'>PLEASE REGISTER</h2>
            <form onSubmit={handleRegister}>
                <input type="text" id="" name="name" placeholder="Your Name" required />
                <input type="email" id="" name="email" placeholder="Email Address" required />
                <input type="password" id="" name="password" placeholder="Password" required />
                <input onClick={() => setAgree(!agree)} type="checkbox" id="terms" name="terms" />
                {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor='terms'>Accept Terms And Conditions</label> */}
                <label className={`ps-2 ${agree ? 'ps-2 text-primary' : 'ps-2 text-danger'}`} htmlFor='terms'>Accept Terms And Conditions</label>
                <input disabled={!agree} className='mt-2' type="submit" value="Register" />
            </form>
            <p className='mt-4'>Already Have An Account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login Here</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
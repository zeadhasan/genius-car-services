import React from 'react';
import google from "../../../images/Social/google.png";
import facebook from "../../../images/Social/facebook.png";
import github from "../../../images/Social/github.png"
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitHubUser, gitHubLoading, gitHubError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading || gitHubLoading) {
        return <Loading></Loading>
    }

    if (error || gitHubError) {
        errorElement = <p className='text-danger'>Error: {error?.message} {gitHubError?.message}</p>
    }
    if (user || gitHubUser) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'> <img style={{ width: "30px" }} src={google} alt="" /> <span className='px-2'>Google Sing In</span> </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'> <img style={{ width: "30px" }} src={facebook} alt="" /> <span className='px-2'>Facebook Sing In</span> </button>
                <button onClick={() => signInWithGithub()} className='btn btn-info w-50 d-block mx-auto my-2'> <img style={{ width: "30px" }} src={github} alt="" /> <span className='px-2'>Github Sing In</span> </button>
            </div>
        </div>
    );
};

export default SocialLogin;
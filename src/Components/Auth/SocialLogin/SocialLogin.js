import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '../../../Asset/Image/google.svg'
import auth from '../../../Firebase/Firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        toast.success('Successfully login', {id: 'success'})
            navigate('/')
      }
    const googleAuth = () => {
        signInWithGoogle()
      };
    return (
        <div>
            <div className="input-wrapper">
            <button onClick={googleAuth} className="google-auth">
                <img src={GoogleLogo} alt="" />
                <p> Continue with Google </p>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;
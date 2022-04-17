import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '../../../Asset/Image/google.svg'
import auth from '../../../Firebase/Firebase.init';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const googleAuth = ()=>{
      signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success('Successfully login', {id: 'error'})
        navigate('/')
      }).catch((error) => {

        const errorMessage = error.message;
        toast.error(errorMessage, {id: 'error'})
    });

    }

    const handleLogin = (e)=>{
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success('Successfully login', {id: 'error'})
        const user = userCredential.user;
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, {id: 'error'})
      });
    }

    return (
        <div className='auth-form-container '>
        <div className='auth-form'>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <div className='input-field'>
              <label htmlFor='email'>Email</label>
              <div className='input-wrapper'>
                <input type='text' name='email' id='email' />
              </div>
            </div>
            <div className='input-field'>
              <label htmlFor='password'>Password</label>
              <div className='input-wrapper'>
                <input type='password' name='password' id='password' />
              </div>
            </div>
            <button type='submit' className='auth-form-submit'>
              Login
            </button>
          </form>
          <p className='redirect'>
            New to Horizon Travels?{" "}
            <span onClick={() => navigate("/signup")}>Create New Account</span>
          </p>
          <div className='horizontal-divider'>
            <div className='line-left' />
            <p>or</p>
            <div className='line-right' />
          </div>
          <div className='input-wrapper'>
            <button onClick={googleAuth} className='google-auth'>
              <img src={GoogleLogo} alt='' />
              <p> Continue with Google </p>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;
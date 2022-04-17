import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');

    const [email, setEmail] = useState({value: '', error: ''});
    const [password, setPassword] = useState({value: '', error: ''});
    console.log(email.value, password.value);

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);


    if (user) {
      toast.success('Successfully login', {id: 'success'})
      navigate('/')
    }
    if (error) {
      toast.error(error.message, {id: 'error'})
      
    }
    if (loading) {
      <p>Loading...</p>;
    }

    const handleEmail = (emailInput) => {
      if (/^\S+@\S+\.\S+$/.test(emailInput)) {
        setEmail({value: emailInput, error: ''})
      }
      else{
        setEmail({value: '', error: 'Invalid Email'})
      }
    }

    const handlePassword = (passwordInput) => {
      setPassword({value: passwordInput})
    }

    const handleLogin = (e)=>{
      e.preventDefault();
      if (email.value === '') {
        setEmail({value: '', error: 'Email is required'})
      }
      if (password.value === '') {
        setPassword({value: '', error: 'Password is required'})
      }
      if (email.value && password) {
        signInWithEmailAndPassword(email.value, password.value)
      }
    }
    const resetPassword = async (e)=>{
      const email = emailRef.current.value
      if (email) {
        await sendPasswordResetEmail(email)
        toast.success('Sent email', {"1d": 'success'} )
      }
      else{
        toast.error('Please enter your email', {"1d": 'error'})
      }
    }

    return (
        <div className='auth-form-container '>
        <div className='auth-form'>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <div className='input-field'>
              <label htmlFor='email'>Email</label>
              <div className='input-wrapper'>
                <input onBlur={(e)=>handleEmail(e.target.value)}  ref={emailRef} type='text' name='email' id='email' />
              </div>
              {
              email?.error && <p className="error">{email.error}</p>
              }
            </div>
            <div className='input-field'>
              <label htmlFor='password'>Password</label>
              <div className='input-wrapper'>
                <input onBlur={(e)=>handlePassword(e.target.value)} type='password' name='password' id='password' />
              </div>
              {
              password?.error && <p className="error">{password.error}</p>
            }
            </div>
            <button type='submit' className='auth-form-submit'>
              Login
            </button>
          </form>
          <p className='redirect'>
            New to Horizon Travels?{" "}
            <span onClick={() => navigate("/signup")}>Create New Account</span>
          </p>
          <p className='redirect'>
            Forget Password?{" "} 
            <span  onClick={resetPassword}>Reset Password</span></p>
          <div className='horizontal-divider'>
            <div className='line-left' />
            <p>or</p>
            <div className='line-right' />
          </div>
          <SocialLogin/>
        </div>
      </div>
    );
};

export default Login;
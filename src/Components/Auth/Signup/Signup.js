import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from './../../../Firebase/Firebase.init';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState({value: '', error: ''})
    const [password, setPassword] = useState({value: '', error: ''})
    const [confirmPassword, setConfirmPassword] = useState({value: '', error: ''})

    const [createUserWithEmailAndPassword, user, loading,error,] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
      toast.success('Successfully login', {id: 'error'})
      navigate('/')
    }
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
        const errorMessage = error.message;
        if (errorMessage.includes('email-already-in-use')) {
          
          toast.error('Already Exist', {id: 'error'})
        }else{
          toast.error(errorMessage, {id: 'error'})
        }
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
    if (passwordInput.length < 6) {
      setPassword({value: '', error: 'Password too short'})
    }else{
      setPassword({value: passwordInput, error: ''})
    }
  }
  const handleConfirmPassword = (confirmPasswordInput) => {
      console.log(confirmPasswordInput, password.value);
    if ( confirmPasswordInput === password.value) {
      setConfirmPassword({value: confirmPasswordInput, error: ''})
    }else{
      setConfirmPassword({value: '', error: 'Password not match'})
    }
  }


  const handleSignUp = (e) => {
    e.preventDefault();

    if (email.value === '') {
      setEmail({value: '', error: 'Email is required'})
    }
    if (password.value === '') {
      setPassword({value: '', error: 'Password is required'})
    }


    if (email.value && password.value && confirmPassword.value === password.value) {
      createUserWithEmailAndPassword(email.value, password.value)
    }

  };
    return (
        <div className="auth-form-container ">
      <div className="auth-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input onBlur={(e)=>handleEmail(e.target.value)} type="email" name="email" id="email" />
            </div>
            {
              email?.error && <p className="error">{email.error}</p>
            }
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input onBlur={(e)=>handlePassword(e.target.value)} type="password" name="password" id="password" />
            </div>
            {
              password?.error && <p className="error">{password.error}</p>
            }
          </div>
          <div className="input-field">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="input-wrapper">
              <input onBlur={(e)=>handleConfirmPassword(e.target.value)}
                type="password"
                name="confirmPassword"
                id="confirm-password"
              />
            </div>
            {
              confirmPassword?.error && <p className="error">{confirmPassword.error}</p>
            }
          </div>
          <button type="submit" className="auth-form-submit">
            Sign Up
          </button>
        </form>
        <p className="redirect">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
        <div className="horizontal-divider">
          <div className="line-left" />
          <p>or</p>
          <div className="line-right" />
        </div>
        <SocialLogin/>
      </div>
    </div>
    );
};

export default Signup;
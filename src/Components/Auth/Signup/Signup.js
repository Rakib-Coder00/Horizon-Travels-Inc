import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from './../../../Firebase/Firebase.init';
import GoogleLogo from '../../../Asset/Image/google.svg'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import toast from 'react-hot-toast';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState({value: '', error: ''})
    const [password, setPassword] = useState({value: '', error: ''})
    const [confirmPassword, setConfirmPassword] = useState({value: '', error: ''})

  console.log(email);
  console.log(password);
  console.log(confirmPassword);

  const provider = new GoogleAuthProvider();
  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success('Successfully login', {id: 'error'})
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {id: 'error'});
        
      });
  };

  const handleEmail = (e) => {
    if (/^\S+@\S+\.\S+$/.test(e)) {
      setEmail({value: e, error: ''})
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
      
      createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success('user Created', {id: 'error'})
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorMessage.includes('email-already-in-use')) {
          
          toast.error('Already Exist', {id: 'error'})
        }else{
          toast.error(errorMessage, {id: 'error'})
        }
      });
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
        <div className="input-wrapper">
          <button onClick={googleAuth} className="google-auth">
            <img src={GoogleLogo} alt="" />
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
    );
};

export default Signup;
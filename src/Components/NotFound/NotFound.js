import React from 'react';
import './NotFound.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='container text-center mt-5'>
            <h1 className='error-code'>4 <span className='fa'><FontAwesomeIcon icon={faFrown} /></span> 4</h1>
            <h2>Oopps... Page Not Found!</h2>
            <p className='mt-5'>The URL may be misplaced or the page you are looking is no longer available.</p>
            <button className='btn btn-primary'onClick={()=>navigate('/')}>Back to home</button>
        </div>
    );
};

export default NotFound;
import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
            <footer className='footer text-center mt-auto py-2'>
            <div className="">
            <p><small>Copyrights &copy; {year}</small>  Horizon Travel. All rights reserved. No part of this site may be reproduced without our written permission.</p>
            </div>
            </footer>
    );
};

export default Footer;
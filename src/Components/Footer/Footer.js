import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
            <footer className='text-center mt-5'>
            <div className="">
            <p><small>Copyrights &copy; {year}</small>  Horizon Travel. All rights reserved. No part of this site may be reproduced without our written permission.</p>
            </div>
            </footer>
    );
};

export default Footer;
import React from 'react';
import './Checkout.css';

const Checkout = () => {
    return (
        <div className="mt-5 min-vh-100">
      <h1 className="text-plan text-center">Place to go !!</h1>
      <div className="checkout mt-5">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
            <div className="plan-content">
              <span className="text-white">Looking for a travel deal? !</span>
              <h2 className="mt-2 mb-4 text-white">Discount Up To 40%</h2>
              <button className="btn btn-primary">Checkout Deals</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Checkout;
import React from "react";
import "./PlanTrip.css";

const PlanTrip = () => {
  return (
    <div className="mt-5">
      <h1 className="text-plan text-center">Plan Your Trip</h1>
      <div className="plan mt-5">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
            <div className="plan-content">
              <span>Discount Up To 40%</span>
              <h2 className="mt-2 mb-4 text-white">WHEN'S THE BEST TIME TO VISIT?!</h2>
              <button className="btn btn-primary">Start Planing</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;

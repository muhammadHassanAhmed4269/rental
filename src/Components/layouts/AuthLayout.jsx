import React from "react";
import Table from "../../Assets/Table.png";
import "../../styles/authStyles.css";

const AuthLayout = ({ children }) => {
  return (
    <div className="main-container">
      <div>
        <h1>Need it? Rental Mate delivers.</h1>
        <h3>No more buying, just renting with Rental Mate</h3>
        <img src={Table} alt="" />
      </div>

      <div className="frame21">
        <div className="reactangle6">
          <div className="frame20">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

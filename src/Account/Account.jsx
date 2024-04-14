import React, { useContext } from "react";
import "./Account.css";
import { ShopContext } from "../Context/ShopContext";

const Account = () => {
  const { userData } = useContext(ShopContext);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    window.location.replace("/");
  };

  return (
    <div className="account-container">
      <div className="details">
        <p>Account Details</p>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="user-details">
        <p>
          {userData.fname} {userData.lname}
        </p>
        <p>{userData.email}</p>
      </div>
    </div>
  );
};

export default Account;

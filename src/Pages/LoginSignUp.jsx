import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignUp = () => {
  return (
    <div className="loginsignup">
      <div class="loginsignup-container">
        <h1>Sign Up</h1>
        <div class="loginsignup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div class="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;

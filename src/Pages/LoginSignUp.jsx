import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginSignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showContainer, setShowContainer] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowContainer(false);
    let url = isLogin
      ? "http://localhost:4000/login"
      : "http://localhost:4000/signup";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem("auth_token", responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors);
        setShowContainer(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setShowContainer(true);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="loginsignup">
      <FormContainer className="FormContainer">
        <form onSubmit={handleSubmit}>
          <div className="brand">
            <h1>{isLogin ? "LOGIN" : "SIGNUP"}</h1>
          </div>
          {!isLogin && (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Username"
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
          {!isLogin && (
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              type="password"
              placeholder="Confirm Password"
            />
          )}
          <button type="submit" disabled={!showContainer}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
          <span>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <ToggleLink onClick={toggleForm}>
              {isLogin ? "Sign up" : "Login"}
            </ToggleLink>
          </span>
        </form>
      </FormContainer>
    </div>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    transition: transform 0.5s ease-in-out;
    svg {
      font-size: 28px;
      color: white;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
    &:hover {
      transform: scale(1.05);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    backdrop-filter: blur(10px);

    @media (max-width: 500px) {
      padding: 2rem 2rem;
      margin: auto 1rem;
    }
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem dotted #25008a;
    border-radius: 0.5rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem dotted #4908fe;
      outline: none;
    }
    @media (max-width: 500px) {
      padding: 1rem;
      font-size: 14px;
    }
  }
  button {
    background-color: #150050;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #29009b;
    }
    @media (max-width: 500px) {
      width: 100%;
      font-size: 14px;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #8b0000;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s ease;
      &:hover {
        color: #9f7ef9;
      }
      @media (max-width: 500px) {
        font-size: 14px;
      }
    }
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
`;

const ToggleLink = styled.span`
  color: #8b0000;
  font-weight: bold;
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #9f7ef9;
  }
`;

export default LoginSignUp;

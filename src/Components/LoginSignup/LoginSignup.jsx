import React, { useState } from "react";
import { HoveredText } from "../HamburgerMenu/HamburgerMenu";

const LoginSignup = () => {
  const isLoggedIn = localStorage.getItem("auth_token");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [showContainer, setShowContainer] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const transformedValue = name === "email" ? value.toLowerCase() : value;
    setFormData({ ...formData, [name]: transformedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowContainer(false);
    let url = isLogin ? `${backendUrl}/login` : `${backendUrl}/signup`;
    console.log(url);
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
        toggleForm();
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
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div>
      {" "}
      {!isLoggedIn && (
        <div className="FormContainer">
          <div className="loginSignupButtons">
            <button
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              <HoveredText text={"LOGIN"} />
            </button>
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              <HoveredText text={"SIGN UP"} />
            </button>
            <button type="submit" disabled={!showContainer}>
              <HoveredText text={"ENTER"} />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <input
                  className="inputField"
                  name="firstname"
                  value={formData.firstname}
                  onChange={changeHandler}
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="inputField"
                  name="lastname"
                  value={formData.lastname}
                  onChange={changeHandler}
                  type="text"
                  placeholder="Last Name"
                />
              </>
            )}
            <input
              className="inputField"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              placeholder="Email"
            />
            <input
              className="inputField"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type="password"
              placeholder="Password"
              autoCapitalize="none"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
